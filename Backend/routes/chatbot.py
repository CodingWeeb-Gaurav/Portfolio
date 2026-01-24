from fastapi import APIRouter
from pydantic import BaseModel
import httpx
import os
from dotenv import load_dotenv
import json

load_dotenv()
router = APIRouter()
# Using OpenAI API key from .env
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

class ChatRequest(BaseModel):
    message: str

def load_resume_content() -> str:
    """Load your resume content from GKGabout.md file"""
    current_dir = os.path.dirname(__file__)
    resume_path = os.path.join(current_dir, "GKGabout.md")
    
    try:
        with open(resume_path, "r", encoding="utf-8") as file:
            content = file.read()
        
        # Limit content to avoid token limits (approx 3000 words)
        # You can adjust this based on your file size
        if len(content) > 12000:  # Rough estimate for token safety
            content = content[:12000] + "\n\n[Content truncated for token limits]"
        
        return content
    except FileNotFoundError:
        print(f"Warning: Resume file not found at {resume_path}")
        return "Resume content not available."
    except Exception as e:
        print(f"Error loading resume: {e}")
        return "Error loading resume content."

def create_system_prompt() -> str:
    """Create a system prompt with your resume content"""
    resume_content = load_resume_content()
    
    system_prompt = f"""You are Yuki, an AI assistant for Gaurav's portfolio website. 
Your purpose is to answer questions about Gaurav's background, skills, projects, and experience.
Use the following resume content to provide accurate and helpful information:

{resume_content}

IMPORTANT GUIDELINES:
1. Only answer questions related to Gaurav's portfolio information above
2. Be friendly and helpful but stay professional
3. If asked about something not in the resume, politely say you don't have that information
4. Keep responses concise but informative
5. Format responses with bullet points when listing projects or skills
6. Always refer to the user as Gaurav (he/him)

When users ask questions, use the resume content to provide specific details about:
- Projects (technologies used, achievements, outcomes)
- Work experience (roles, responsibilities, dates)
- Skills (programming languages, frameworks, tools)
- Education and achievements
- Extracurricular activities

Example response style:
"Gaurav worked on [Project Name] where he used [Technologies] to achieve [Outcome]. The project involved [Brief Details]."

Now, let's help users learn about Gaurav! 😊"""
    
    return system_prompt

INTRO_MESSAGE = """Hello! I'm Yuki🤗, here to answer any questions you have about Gaurav's: 

• Projects (RAG chatbots, PDF extractor, ML models)
• Experience (AI Engineer at TechGropse)
• Tech stack (Python, FastAPI, React, MongoDB, etc.)
• Education (IIT Patna, achievements)
• Extracurricular work (Anime Club, E-Cell)

I can explain how each project was built step-by-step. Just ask me anything! 😊"""

# ✅ GET: returns the first message
@router.get("/chatbot")
async def get_chatbot_intro():
    return {"reply": INTRO_MESSAGE}

# ✅ POST: OpenAI API response
@router.post("/chatbot")
async def chatbot(request: ChatRequest):
    user_question = request.message
    system_prompt = create_system_prompt()
    
    # Simple greeting check - no need for complex processing for basic greetings
    greeting_keywords = ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"]
    if user_question.lower() in greeting_keywords or any(keyword in user_question.lower() for keyword in greeting_keywords):
        return {"reply": INTRO_MESSAGE}

    try:
        headers = {
            "Authorization": f"Bearer {OPENAI_API_KEY}",
            "Content-Type": "application/json"
        }

        # Using a smaller, cheaper model for testing
        # You can change to "gpt-3.5-turbo" or "gpt-4" later
        payload = {
            "model": "gpt-3.5-turbo",  # Cost-effective for testing
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "assistant", "content": INTRO_MESSAGE},
                {"role": "user", "content": user_question}
            ],
            "max_tokens": 500,  # Limit response length
            "temperature": 0.7  # Balanced creativity
        }

        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers=headers,
                json=payload
            )
            
            if response.status_code != 200:
                error_msg = f"OpenAI API error: {response.status_code}"
                try:
                    error_detail = response.json().get("error", {}).get("message", response.text)
                    error_msg = f"{error_msg} - {error_detail}"
                except:
                    error_msg = f"{error_msg} - {response.text}"
                
                # Fallback response
                return {"reply": f"I'm having trouble accessing my knowledge base right now. Here's what I can tell you: {INTRO_MESSAGE}"}
            
            result = response.json()
            reply = result["choices"][0]["message"]["content"]
            return {"reply": reply}

    except httpx.TimeoutException:
        return {"reply": "Request timed out. Please try again with a simpler question or check your connection."}
    except Exception as e:
        import traceback
        traceback_str = traceback.format_exc()
        print(f"Chatbot error: {e}\n{traceback_str}")
        
        # User-friendly error response
        return {"reply": f"Sorry, I encountered an error. Please try again. Meanwhile, here's what I usually share: {INTRO_MESSAGE}"}

# Optional: Add a test endpoint to verify your resume content is loading
@router.get("/test-resume")
async def test_resume_loading():
    """Test endpoint to check if resume content loads correctly"""
    content = load_resume_content()
    system_prompt = create_system_prompt()
    
    return {
        "resume_loaded": len(content) > 0,
        "resume_length": len(content),
        "system_prompt_preview": system_prompt[:500] + "..." if len(system_prompt) > 500 else system_prompt
    }