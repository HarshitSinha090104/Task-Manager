# 🚀 Task Manager – Full Stack Application



A full-stack task management system with secure authentication, role-based access control, and real-time task tracking.

---

## 🌐 Live Demo

- 🔗 Frontend: https://task-manager-beta-pied.vercel.app  
- 🔗 Backend: https://task-manager-production-23d0.up.railway.app  

---

## ✨ Features

- 🔐 JWT-based Authentication (Signup/Login)
- 👥 Role-Based Access (Admin / Member)
- 📋 Task Management (Create, Update, Track Status)
- 📊 Dashboard with task status tracking
- 🔒 Secure REST APIs using Spring Security
- 🌍 Fully deployed (Frontend + Backend)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Tailwind CSS

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- REST APIs

### Database
- MySQL (Local)
- H2 (Production - Railway)

### Deployment
- Vercel (Frontend)
- Railway (Backend)

### Tools
- Git & GitHub
- Postman

---

## 🧱 Project Structure

Task-Manager/
│
├── backend/
│ ├── src/main/java/com/example/taskmanager/
│ ├── src/main/resources/
│ └── pom.xml
│
├── frontend/
│ ├── src/
│ └── package.json
│
└── README.md


---

## 🔐 Authentication Flow

1. User logs in → receives JWT token  
2. Token stored in localStorage  
3. Token sent in Authorization header  
4. Backend validates using JWT filter  

---

## 📡 API Endpoints

### Auth
- POST `/api/auth/signup`
- POST `/api/auth/login`

### Tasks
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/{id}`
- DELETE `/api/tasks/{id}`

---

## 📸 Screenshots

<img width="1906" height="964" alt="image" src="https://github.com/user-attachments/assets/e98631ab-9739-4f17-9c8b-15a32f4ce82f" />
Login 
<img width="1914" height="968" alt="image" src="https://github.com/user-attachments/assets/fd6a15b5-e0de-45d0-856c-462ac6ffc2e4" />
Signup
<img width="1919" height="892" alt="image" src="https://github.com/user-attachments/assets/74a8da50-26ac-45c9-b50e-352e2a0c335e" />
Dashboard

