from sqlalchemy.orm import Session
import models, schemas

# SKILLS
def get_skills(db: Session):
    return db.query(models.Skill).all()

def create_skill(db: Session, skill: schemas.SkillCreate):
    db_skill = models.Skill(**skill.dict())
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill

def update_skill(db: Session, skill_id: int, updated_data: schemas.SkillCreate):
    skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if skill:
        for key, value in updated_data.dict().items():
            setattr(skill, key, value)
        db.commit()
        db.refresh(skill)
    return skill

def delete_skill(db: Session, skill_id: int):
    skill = db.query(models.Skill).filter(models.Skill.id == skill_id).first()
    if skill:
        db.delete(skill)
        db.commit()
    return skill

# PROJECTS
def get_projects(db: Session):
    return db.query(models.Project).all()

def create_project(db: Session, project: schemas.ProjectCreate):
    db_project = models.Project(**project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

def update_project(db: Session, project_id: int, updated_data: schemas.ProjectCreate):
    project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if project:
        for key, value in updated_data.dict().items():
            setattr(project, key, value)
        db.commit()
        db.refresh(project)
    return project

def delete_project(db: Session, project_id: int):
    project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if project:
        db.delete(project)
        db.commit()
    return project

# BLOG POSTS
def get_blog_posts(db: Session):
    return db.query(models.BlogPost).order_by(models.BlogPost.timestamp.desc()).all()

def create_blog_post(db: Session, blog: schemas.BlogPostCreate):
    db_blog = models.BlogPost(**blog.dict())
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return db_blog

def update_blog_post(db: Session, blog_id: int, blog: schemas.BlogPostCreate):
    db_blog = db.query(models.BlogPost).filter(models.BlogPost.id == blog_id).first()
    if db_blog:
        for key, value in blog.dict().items():
            setattr(db_blog, key, value)
        db.commit()
        db.refresh(db_blog)
    return db_blog

def delete_blog_post(db: Session, blog_id: int):
    db_blog = db.query(models.BlogPost).filter(models.BlogPost.id == blog_id).first()
    if db_blog:
        db.delete(db_blog)
        db.commit()
    return db_blog

