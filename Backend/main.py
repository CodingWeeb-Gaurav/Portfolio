from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import models, schemas, crud
from database import SessionLocal, engine, Base
from github_utils import get_github_summary
from competitive_utils import get_leetcode_stats, get_codeforces_stats
from competitive_utils import get_codechef_stats
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from routes.chatbot import router as chatbot_router

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Portfolio backend running!"}

# Skills API
@app.get("/skills", response_model=list[schemas.SkillOut])
def read_skills(db: Session = Depends(get_db)):
    return crud.get_skills(db)

@app.post("/skills", response_model=schemas.SkillOut)
def add_skill(skill: schemas.SkillCreate, db: Session = Depends(get_db)):
    return crud.create_skill(db, skill)

@app.put("/skills/{skill_id}", response_model=schemas.SkillOut)
def update_skill(skill_id: int, skill: schemas.SkillCreate, db: Session = Depends(get_db)):
    return crud.update_skill(db, skill_id, skill)

@app.delete("/skills/{skill_id}", response_model=schemas.SkillOut)
def delete_skill(skill_id: int, db: Session = Depends(get_db)):
    return crud.delete_skill(db, skill_id)

# Projects API
@app.get("/projects", response_model=list[schemas.ProjectOut])
def read_projects(db: Session = Depends(get_db)):
    return crud.get_projects(db)

@app.post("/projects", response_model=schemas.ProjectOut)
def add_project(project: schemas.ProjectCreate, db: Session = Depends(get_db)):
    return crud.create_project(db, project)

@app.put("/projects/{project_id}", response_model=schemas.ProjectOut)
def update_project(project_id: int, project: schemas.ProjectCreate, db: Session = Depends(get_db)):
    return crud.update_project(db, project_id, project)

@app.delete("/projects/{project_id}", response_model=schemas.ProjectOut)
def delete_project(project_id: int, db: Session = Depends(get_db)):
    return crud.delete_project(db, project_id)


# External API for GitHub summary
@app.get("/github/summary")
def github_summary():
    return get_github_summary()

# Codeforces, Codechef, and LeetCode stats
@app.get("/competitive/lc/{username}")
def leetcode_stats(username: str):
    return get_leetcode_stats(username)

@app.get("/competitive/cf/{username}")
def codeforces_stats(username: str):
    return get_codeforces_stats(username)

@app.get("/competitive/cc/{username}")
def codechef_stats(username: str):
    return get_codechef_stats(username)

# Blog Posts API
@app.get("/blogs", response_model=list[schemas.BlogPostOut])
def read_blogs(db: Session = Depends(get_db)):
    return crud.get_blog_posts(db)

@app.post("/blogs", response_model=schemas.BlogPostOut)
def add_blog(blog: schemas.BlogPostCreate, db: Session = Depends(get_db)):
    return crud.create_blog_post(db, blog)

@app.put("/blogs/{blog_id}", response_model=schemas.BlogPostOut)
def update_blog(blog_id: int, blog: schemas.BlogPostCreate, db: Session = Depends(get_db)):
    updated = crud.update_blog_post(db, blog_id, blog)
    if updated:
        return updated
    else:
        raise HTTPException(status_code=404, detail="Blog post not found.")

@app.delete("/blogs/{blog_id}", response_model=schemas.BlogPostOut)
def delete_blog(blog_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_blog_post(db, blog_id)
    if deleted:
        return deleted
    else:
        raise HTTPException(status_code=404, detail="Blog post not found.")
    
app.include_router(chatbot_router)





