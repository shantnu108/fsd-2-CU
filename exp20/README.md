# Experiment 20 - CI/CD Pipeline for Application Deployment

This experiment demonstrates the implementation of a **Continuous Integration/Continuous Deployment (CI/CD)** pipeline for a Flask backend application. It integrates the testing workflow from **Experiment-16** and extends it with Docker containerization and GitHub Actions-based CD pipeline.

## 📋 Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Backend Application](#backend-application)
- [Docker Setup](#docker-setup)
- [CI/CD Pipeline](#cicd-pipeline)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)
- [Learning Outcomes](#learning-outcomes)

---

## 🔍 Overview

| Component | Technology |
|-----------|-----------|
| Backend | Flask (Python 3.11) |
| Testing | Pytest |
| Containerization | Docker |
| CI/CD | GitHub Actions |
| Production Server | Gunicorn |

---

## 📁 Project Structure

```
Experiment-20/
├── backend/
│   ├── app.py                 # Flask application
│   ├── requirements.txt       # Python dependencies
│   ├── Dockerfile             # Docker container configuration
│   ├── .dockerignore          # Docker build exclusions
│   └── tests/
│       ├── __init__.py
│       └── test_app.py        # Unit tests (Pytest)
├── cd-pipeline.yml            # GitHub Actions CD workflow (reference copy)
├── SS/                        # Screenshots
└── README.md                  # This file
```

---

## ⚙️ Prerequisites

- **Python 3.11+** installed
- **Docker Desktop** installed and running
- **Git** installed
- **GitHub** repository with Actions enabled

---

## 🖥️ Backend Application

The Flask backend provides a RESTful API with the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message with API info |
| GET | `/api/health` | Health check endpoint |
| GET | `/api/users` | List all users |
| POST | `/api/users` | Create a new user |

### Running Backend Locally

```bash
cd backend
python -m venv venv
source venv/Scripts/activate    # Windows
pip install -r requirements.txt
python app.py
```

### Running Tests

```bash
cd backend
pytest tests/ -v
```

---

## 🐳 Docker Setup

### Building the Docker Image

```bash
cd Experiment-20/backend
docker build -t flask-backend-app:latest .
```

### Running the Docker Container

```bash
docker run -d --name flask-container -p 5000:5000 flask-backend-app:latest
```

### Verifying the Container

```bash
# Check running containers
docker ps

# Check Docker images
docker images

# Test the application
curl http://localhost:5000/api/health

# View container logs
docker logs flask-container
```

### Stopping and Removing the Container

```bash
docker stop flask-container
docker rm flask-container
```

---

## 🔄 CI/CD Pipeline

The CD pipeline (`.github/workflows/cd-pipeline.yml`) is triggered on pushes to the `main` branch and consists of **3 stages**:

### Pipeline Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Stage 1    │────▶│     Stage 2      │────▶│    Stage 3      │
│  Unit Tests  │     │  Docker Build +  │     │   Deploy to     │
│  (Pytest)    │     │  Smoke Test      │     │   Registry      │
└──────────────┘     └──────────────────┘     └─────────────────┘
```

### Stage 1: Unit Tests (CI)
- Checks out the code
- Sets up Python 3.11
- Installs dependencies
- Runs Pytest test suite

### Stage 2: Docker Build (CD)
- Builds Docker image from Dockerfile
- Runs the container
- Performs smoke tests (health check & endpoint verification)
- Validates the container is running correctly

### Stage 3: Deploy to Registry (CD)
- Tags the image with commit SHA
- Pushes to Docker Hub (when credentials are configured)
- Generates deployment summary

### Triggering the Pipeline

The pipeline runs automatically when:
- Code is pushed to the `main` branch (files in `Experiment-20/`)
- A pull request is opened targeting `main`
- Manually triggered via `workflow_dispatch`

---

## 🚀 How to Run

### Step 1: Run Tests
```bash
cd Experiment-20/backend
pip install -r requirements.txt
pytest tests/ -v
```

### Step 2: Build Docker Image
```bash
cd Experiment-20/backend
docker build -t flask-backend-app:latest .
```

### Step 3: Run Container
```bash
docker run -d --name flask-container -p 5000:5000 flask-backend-app:latest
```

### Step 4: Verify
```bash
# Check container status
docker ps

# Test the API
curl http://localhost:5000/
curl http://localhost:5000/api/health
curl http://localhost:5000/api/users
```

### Step 5: Push to GitHub (triggers CD pipeline)
```bash
git add .
git commit -m "Add Experiment-20: CI/CD Pipeline"
git push origin main
```

---

## 📸 Screenshots

### Docker Image & Running Container (CLI)
<img width="1919" height="1018" alt="docker image" src="https://github.com/user-attachments/assets/60996772-24cc-4366-b83c-22be07c969a8" />


### GitHub Actions Workflow
<img width="1919" height="971" alt="github test" src="https://github.com/user-attachments/assets/f4728ffd-c1a9-44b5-a363-edc4feda7b7f" />


---

## 📖 Learning Outcomes

1. **Understand CI/CD Concepts** — Learned the fundamentals of Continuous Integration and Continuous Deployment pipelines and how they automate software delivery.

2. **Docker Containerization** — Gained hands-on experience building Docker images, writing Dockerfiles, and running containers for application deployment.

3. **GitHub Actions CD Pipeline** — Learned how to extend CI workflows with CD stages including Docker image building, smoke testing, and registry deployment.

4. **Integration of Testing & Deployment** — Understood how to integrate unit testing (from Experiment-16) with deployment automation to create a complete pipeline.

5. **Production-Ready Deployment** — Developed skills in production deployment practices including health checks, multi-stage pipelines, and container orchestration.

---

## 👤 Author

**Shantnu** — UID: 23BDA70057

---
