from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
from dotenv import load_dotenv

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

app = FastAPI()

def load_system_prompt(filepath: str = "./system_prompt.txt") -> str:
    with open(filepath, "r", encoding="utf-8") as file:
        return file.read()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this in production
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chatbot")
async def chatbot(request: Request):
    data = await request.json()
    user_question = data.get("message")
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
                {"role": "assistant", "content": """Hello! I'm Mini GKG 🤖—here to answer any questions you have about Gaurav's:
• Projects
• Experience
• Tech stack
• Timeline
• Extracurricular work

I can explain how each project was built step by step—because if that info was already in his resume, I'd be out of a job 😢."""},
                {"role": "user", "content": user_question}
            ]
        }

        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.groq.com/openai/v1/chat/completions",
                headers=headers,
                json=payload
            )
            result = response.json()
            reply = result["choices"][0]["message"]["content"]
            return {"reply": reply}

    except Exception as e:
        return {"error": str(e)}
