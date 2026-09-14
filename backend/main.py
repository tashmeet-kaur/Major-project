from fastapi import FastAPI, HTTPException
from schemas import SignupRequest, LoginRequest
from auth_utils import hash_password, verify_password
from datetime import datetime, timedelta
from jose import jwt

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Temporary in-memory "database" — replace with PostgreSQL later
fake_users_db = {}

SECRET_KEY = "temporary-secret-key-change-this-later"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60


@app.get("/")
def health_check():
    return {"status": "SkyGuard backend running"}


@app.post("/signup")
def signup(request: SignupRequest):
    if request.email in fake_users_db:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_pw = hash_password(request.password)
    fake_users_db[request.email] = {
        "name": request.name,
        "email": request.email,
        "hashed_password": hashed_pw,
    }
    return {"message": "Signup successful", "email": request.email}


def create_access_token(email: str):
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    payload = {"sub": email, "exp": expire}
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


@app.post("/login")
def login(request: LoginRequest):
    user = fake_users_db.get(request.email)
    if not user or not verify_password(request.password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = create_access_token(request.email)
    return {"access_token": token, "token_type": "bearer"}
    