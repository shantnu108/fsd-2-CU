# Experiment WS3 - End Practical CU

This repository contains the implementation of Experiment WS3, an end-to-end full-stack web application designed to demonstrate automated testing and continuous integration.

## Description
The project consists of a Python FastAPI backend and a React (Vite) frontend. The primary objective of this experiment is to set up a full Continuous Integration/Continuous Deployment (CI/CD) pipeline using GitHub Actions, ensuring that all codebase updates are automatically tested.

### Key Features
- **Backend:** A REST API built with FastAPI. Tested comprehensively using `pytest`.
- **Frontend:** A responsive, modern user interface built with React and Vite. Tested using `vitest` and `@testing-library/react`.
- **Containerization:** Both the backend and frontend are containerized using Docker, with a `docker-compose.yml` for effortless local orchestration.
- **CI/CD Pipeline:** A GitHub Actions workflow (`endpracticalcu.yml`) is configured to automatically check out the code, install dependencies, and run both backend and frontend tests whenever changes are pushed to the `main` branch.

## Setup Instructions
To run this application locally using Docker:
```bash
docker-compose up -d --build
```
- The frontend will be available at [http://localhost:5173](http://localhost:5173).
- The backend API will be available at [http://localhost:8000/api/hello](http://localhost:8000/api/hello).

---

**Author**
UID - 23bda70057
Name - Shantnu Kumar Swami
