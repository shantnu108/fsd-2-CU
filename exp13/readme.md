# Flask Students CRUD API

## Learning Outcomes:

1) **Understanding Backend Development with Flask** - You will learn how to build a backend server using Flask, including routing, request handling, and structuring APIs.
2) **Designing and Implementing RESTful APIs** - You will gain practical experience in creating CRUD (Create, Read, Update, Delete) endpoints for managing student data in a structured and scalable way.
3) **Database Integration with MySQL** - You will learn how to connect a Python backend to MySQL, execute queries, and manage persistent data in a student table.
4) **Applying Data Validation Techniques** - You will understand how to validate incoming data (e.g., required fields, data types, constraints) to ensure accuracy and prevent errors or invalid entries.
5) **Handling Real-world Backend Operations** - You will develop skills in error handling, status codes, and secure data handling, preparing you for real-world full-stack or backend development projects.

## API Endpoints

- `GET /` - Health check endpoint
- `POST /students` - Create a new student
- `GET /students` - Get all students
- `GET /students/<id>` - Get a specific student
- `PUT /students/<id>` - Update a student
- `DELETE /students/<id>` - Delete a student

## Local Development

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the application:
   ```bash
   python app.py
   ```

3. The API will be available at `http://localhost:5000`

## Render Deployment

This application is configured for deployment on Render.com with the following files:

- `render.yaml` - Render service configuration
- `Procfile` - Process definition for web service
- `.gitignore` - Files to exclude from deployment

### To Deploy on Render:

1. Push your code to a GitHub repository
2. Connect your GitHub account to Render
3. Create a new "Web Service" from your repository
4. Render will automatically detect the Python configuration
5. Set the `DATABASE_URL` environment variable in Render dashboard
6. Deploy!

The application will be available at: `https://your-app-name.onrender.com`

## Environment Variables

The application supports multiple database configurations:

- `DATABASE_URL` - Full database connection string (for Render/production)
- `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, `DB_NAME` - Individual MySQL credentials
- Falls back to SQLite for local development

---

**BY JATIN KUMAR (23BDA70054)**