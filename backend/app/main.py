import os
from fastapi import FastAPI

app=FastAPI(
    title=os.getenv("APP_NAME","SkillProof"),
    version="0.1.0-alpha",
    )

@app.get("/api/health")
def health() -> dict[str,str]:
    return{"Status":"ok"}