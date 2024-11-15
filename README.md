# ToDoApp 💪📝

Welcome to **ToDoApp** — your ultimate task manager designed for busy women on the go! 💼💅 Whether you're balancing work, family, or personal projects, this app helps you stay organized and accomplish everything on your to-do list. 🎯✨

---

## Features 🌟

- **User Authentication** 🔐: Login and manage your tasks with a secure and simple authentication system.
- **Task Management** ✅: Add, edit, delete, and track tasks effortlessly.
- **Customizable To-Do Lists** 📝: Organize tasks based on categories such as work, personal, shopping, and more.
- **Responsive Design** 📱💻: Optimized for both desktop and mobile devices, making it easy to access your tasks anytime, anywhere.
- **User Profile** 👩‍💼: Manage your account details, preferences, and settings.

---

## Tech Stack ⚙️

The app is built with the following technologies:

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - React for dynamic UI components
  - Fetch API for frontend-backend communication

- **Backend**:
  - Node.js & Express for the server
  - MySQL for the database (to store user and task data)
  - JWT for authentication

---
## DEPLOYMENT LINK 🌟
https://sisamkele022.github.io/ToDoApp/

## Demo 📸

Check out the app in action:

![Demo](https://via.placeholder.com/800x400?text=App+Demo)

---

## Installation 🛠️

To get started with **ToDoApp**, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Sisamkele022/ToDoApp.git
cd ToDoApp
2. Install backend dependencies
Go to the backend directory and run the following command:

bash
Copy code
cd backend
npm install
3. Install frontend dependencies
Go to the frontend directory and run:

bash
Copy code
cd frontend
npm install
4. Set up the database
Make sure MySQL is installed and running.
Create a database called womantodoapp and set up the following tables: users, tasks.
sql
Copy code
CREATE DATABASE womantodoapp;

USE womantodoapp;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
5. Start the development server
Once the database is set up, go back to the root directory and start the app:

bash
Copy code
# Start the backend server
cd backend
npm start

# In a new terminal window, start the frontend server
cd frontend
npm start
Visit http://localhost:3000 in your browser to see the app in action!

Screenshots 📷
Here are some screenshots to give you a glimpse of the app:

Login Page
Dashboard
Task Management
Contributing 🤝
We welcome contributions! If you’d like to improve the app or add new features, feel free to fork this repository and submit a pull request.

Steps to contribute:
Fork the repository.
Clone your forked repository.
Create a new branch: git checkout -b feature-name.
Make your changes and commit them: git commit -am 'Add new feature'.
Push your changes to your forked repo: git push origin feature-name.
Create a pull request to the main repository.
License 📜
This project is licensed under the MIT License. See the LICENSE file for more information.

Contact Me!!! 📧
If you have any questions, feel free to reach out:

Email: sisamkelevava2@gmail.com
Acknowledgements 🙏
Thanks to React for providing the framework.
Special shoutout to Node.js and Express for backend development.
Big thanks to MySQL for the amazing relational database system.
Stay Awesome! 🌟✨
Thank you for checking out WomanToDoApp! We hope it helps you stay organized and productive. Keep hustling, and don’t forget to add your next task! 💪📝

