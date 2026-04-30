TASK MANAGER – FULL STACK APPLICATION
=====================================

Project Overview
----------------
This is a full-stack Task Manager web application that allows users to create, manage, and track tasks with secure authentication and role-based access control. The application is designed to simulate a real-world team collaboration system where Admins can manage projects and Members can manage tasks.

The system is built using React for the frontend and Spring Boot for the backend, with JWT-based authentication and MySQL database integration. The application is fully deployed and accessible online.

------------------------------------------------------------

Live Application
----------------
Frontend (Vercel):
https://task-manager-beta-pied.vercel.app

Backend (Railway):
https://task-manager-production-23d0.up.railway.app

------------------------------------------------------------

Key Features
------------
1. User Authentication
   - Signup and Login functionality
   - JWT-based secure authentication
   - Token-based session management

2. Role-Based Access Control
   - Admin and Member roles
   - Admin can manage projects
   - Members can manage tasks only

3. Task Management
   - Create new tasks
   - View all tasks
   - Update task status:
     TODO → IN_PROGRESS → COMPLETED
   - Real-time status updates

4. Dashboard
   - Displays all tasks
   - Shows status-based task tracking

5. Secure Backend APIs
   - Spring Security integration
   - JWT filter for authentication
   - Protected endpoints

6. Full Deployment
   - Frontend deployed using Vercel
   - Backend deployed using Railway
   - GitHub-based CI/CD

------------------------------------------------------------

Technology Stack
----------------

Frontend:
- React (Vite)
- JavaScript
- Tailwind CSS

Backend:
- Spring Boot
- Spring Security
- JWT (JSON Web Tokens)
- REST APIs

Database:
- MySQL (Local Development)
- H2 Database (Production - Railway)

Tools:
- Git & GitHub
- Postman (API testing)

Deployment:
- Railway (Backend Hosting)
- Vercel (Frontend Hosting)

------------------------------------------------------------

Project Structure
-----------------

Task-Manager/
|
|-- backend/
|   |-- src/main/java/com/example/taskmanager/
|   |-- src/main/resources/
|   |-- pom.xml
|
|-- frontend/
|   |-- src/
|   |-- package.json
|
|-- README.md

------------------------------------------------------------

How It Works
------------

1. User Signup/Login
   - User enters credentials
   - Backend verifies user
   - JWT token is generated

2. Token Storage
   - Token stored in browser (localStorage)

3. API Calls
   - Frontend sends token in Authorization header
   - Backend validates token using JWT filter

4. Role Handling
   - Backend checks user role (Admin/Member)
   - Grants or restricts access accordingly

------------------------------------------------------------

API Endpoints
-------------

Authentication:
- POST /api/auth/signup
- POST /api/auth/login

Tasks:
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/{id}/status

Projects (Admin Only):
- GET /api/projects
- POST /api/projects
- PUT /api/projects/{id}/status

------------------------------------------------------------

Challenges Faced
----------------
- Deployment issues with MySQL connection on Railway
- Fixed by switching to H2 database for production
- CORS errors between frontend and backend
- Resolved by configuring backend CORS policy

------------------------------------------------------------

Author
------
Harshit Sinha
GitHub: https://github.com/HarshitSinha090104

------------------------------------------------------------

Conclusion
----------
This project demonstrates strong full-stack development skills including frontend development, backend API design, authentication, role-based access control, and cloud deployment. It is designed as a scalable and production-ready application.

------------------------------------------------------------
