from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.soil_routes import router as soil_router

app = FastAPI()

# =========================================
# CORS
# =========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================
# ROUTES
# =========================================

app.include_router(soil_router)

# =========================================
# HOME
# =========================================

@app.get("/")
def home():

    return {
        "message": "Soil Backend Running"
    }