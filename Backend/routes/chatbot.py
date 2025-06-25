from fastapi import APIRouter
from pydantic import BaseModel
import httpx
import os
from dotenv import load_dotenv

load_dotenv()
router = APIRouter()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

class ChatRequest(BaseModel):
    message: str

def load_system_prompt() -> str:
    current_dir = os.path.dirname(__file__)
    prompt_path = os.path.join(current_dir, "system_prompt.txt")
    with open(prompt_path, "r", encoding="utf-8") as file:
        return file.read()
    
INTRO_MESSAGE = """Hello! I'm Yuki🤗, here to answer any questions you have about Gaurav's: \n
• Projects \n
• Experience \n
• Tech stack \n
• Timeline \n
• Extracurricular work \n

I can explain how each project was built step by step. Because if that info was already in his resume, I'd be out of a job 😢."""

# ✅ GET: returns the first message (useful for chat init)
@router.get("/chatbot")
async def get_chatbot_intro():
    return {"reply": INTRO_MESSAGE}

# ✅ POST: LLM response to user question
@router.post("/chatbot")
async def chatbot(request: ChatRequest):
    user_question = request.message
    system_prompt = load_system_prompt()

    try:
        headers = {
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": "llama3-8b-8192",
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "assistant", "content": INTRO_MESSAGE},
                {"role": "user", "content": user_question}
            ]
        }

        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.groq.com/openai/v1/chat/completions",
                headers=headers,
                json=payload
            )
            try:
                result = response.json()
                reply = result["choices"][0]["message"]["content"]
            except Exception as parse_error:
                return {"error": "Failed to parse Groq response", "detail": response.text}

            reply = result["choices"][0]["message"]["content"]
            return {"reply": reply}

    except Exception as e:
        import traceback
        traceback_str = traceback.format_exc()
        return {"error": str(e), "trace": traceback_str}
