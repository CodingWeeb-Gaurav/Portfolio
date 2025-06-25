from sqlalchemy import Column, Integer, String, Text, DateTime
from database import Base
from datetime import datetime

class Skill(Base):
    __tablename__ = "skills"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    level = Column(String)  # e.g., Beginner, Intermediate, Expert

class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    link = Column(String)
    tech_stack = Column(String)  # Comma-separated list
    Date = Column(String)  # Date in ISO format
    
class BlogPost(Base):
    __tablename__ = "blog_posts"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    media_url = Column(String)  # URL to image/video/pdf if needed
    timestamp = Column(DateTime, default=datetime.utcnow)
