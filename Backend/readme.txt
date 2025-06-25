cd Backend
venv/Scripts/activate
to update requirements- pip freeze > requirements.txt
installing :- pip install -r requirements.txt
start server :- uvicorn main:app --reload
link - http://localhost:8000/docs
to remove .env from cache: git rm --cached Backend/.env
manually remove pywin32 from requirements.txt