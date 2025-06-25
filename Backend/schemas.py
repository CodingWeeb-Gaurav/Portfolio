from pydantic import BaseModel
#Skill Schemas
from datetime import datetime
class SkillBase(BaseModel):
    name: str
    level: str

class SkillCreate(SkillBase):
    pass

class SkillOut(SkillBase):
    id: int
    model_config = {
        "from_attributes": True
    }
# Project Schemas
class ProjectBase(BaseModel):
    title: str
    description: str
    link: str
    tech_stack: str
    Date: str

class ProjectCreate(ProjectBase):
    pass

class ProjectOut(ProjectBase):
    id: int
    class Config:
        orm_mode = True
        
# Blog Post Schemas      
class BlogPostBase(BaseModel):
    title: str
    content: str
    media_url: str | None = None

class BlogPostCreate(BlogPostBase):
    pass

class BlogPostOut(BlogPostBase):
    id: int
    timestamp: datetime

    class Config:
        orm_mode = True

