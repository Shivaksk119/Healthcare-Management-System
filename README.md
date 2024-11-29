Introduction
-The Healthcare Management System is a full-stack web application designed to manage healthcare-related tasks. It allows users to register, log in, and access role-specific dashboards. The application ensures secure access to different parts of the system through Authentication, Authorization, and Role-Based Access Control (RBAC).

Features
-User Registration and Login
-Role-Based Access Control (Admin, Doctor, Nurse, Patient)
-JWT Authentication
-Secure routes based on user roles
-User management for Admins
-Dashboards for different roles

Technologies Used
-Backend: Node.js, Express, MongoDB, Mongoose, JWT
-Frontend: React, Axios, React Router
-Development Tools: Nodemon, Concurrently, dotenv

Authentication and Authorization
-Authentication: Implemented using JSON Web Tokens (JWT). Users receive a JWT upon successful login or registration, which is used to authenticate subsequent requests.
-Authorization: Middleware functions are used to verify the presence and validity of the JWT in request headers, ensuring that only authenticated users can access protected routes.

Role-Based Access Control (RBAC)
-Users are assigned roles during registration (Admin, Doctor, Nurse, Patient).
-Middleware functions check the user's role before allowing access to specific routes, ensuring that only users with the appropriate role can access certain functionalities.
