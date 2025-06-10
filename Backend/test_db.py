from sqlalchemy import create_engine
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
print("Connecting to:", DATABASE_URL)

engine = create_engine(DATABASE_URL)
conn = engine.connect()
print("✅ Connected to PostgreSQL successfully!")
conn.close()
