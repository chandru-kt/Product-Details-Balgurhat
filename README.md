# Product Details Balurghat (Django & React)

A web application to manage product details (name, description, price). Users can add products via a form, view a list of all products, and see detailed information for each product. This guide covers local setup and development.

**Tech Stack (Local Development):**
*   **Backend:** Python, Django, Django REST Framework
*   **Frontend:** React, Axios, React Router
*   **Database:** SQLite3 (default for Django, created locally)

---

## Local Setup Instructions

### Prerequisites
*   Python 3.8+ and Pip
*   Node.js and npm (or Yarn)
*   Git

### 1. Clone Repository
First, clone the repository to your local machine:
```bash
git clone <your-repository-url>
cd simple-product-app
```
*(Replace `<your-repository-url>` with the actual URL of your Git repository. If you don't have one yet, you can skip this and create the directories manually as per the project structure.)*

### 2. Backend Setup (Django)

   a. **Navigate to Backend Directory:**
      If you cloned the repository, navigate into the backend folder:
      ```bash
      cd backend
      ```
      If starting from scratch, create and navigate into your backend project directory.

   b. **Create and Activate Virtual Environment:**
      It's highly recommended to use a virtual environment for Python projects.
      ```bash
      python -m venv venv
      ```
      Activate the virtual environment:
      *   On Windows:
          ```bash
          venv\Scripts\activate
          ```
      *   On macOS/Linux:
          ```bash
          source venv/bin/activate
          ```
      *(You should see `(venv)` at the beginning of your terminal prompt, indicating the virtual environment is active.)*

   c. **Install Dependencies:**
      Install the required Python packages listed in `requirements.txt`:
      ```bash
      pip install -r requirements.txt
      ```
      *(If you don't have a `requirements.txt` yet, you'll need to install Django, Django REST Framework, etc., manually: `pip install django djangorestframework django-cors-headers python-dotenv`)*

   d. **Create `.env` File (for Environment Variables):**
      Create a file named `.env` in the `backend/` directory. This file will store sensitive information and configurations. For local development, add:
      ```env
      # backend/.env
      DEBUG=True
      SECRET_KEY='your-strong-unique-development-secret-key-here!' # Replace with a real, unique secret key
      ```
      *(**Important:** Replace the `SECRET_KEY` with a strong, unique string. You can generate one easily, e.g., using an online generator or Django's `get_random_secret_key()` function in a Python shell.)*

   e. **Apply Database Migrations:**
      Django uses migrations to manage your database schema. For SQLite (the default), this will create a `db.sqlite3` file in your `backend/` directory.
      ```bash
      python manage.py makemigrations products
      python manage.py migrate
      ```
      *(Assuming your Django app is named `products`. If it's different, replace `products` accordingly.)*

   f. **(Optional) Create Superuser:**
      To access the Django admin interface (available at `/admin/` by default), create a superuser:
      ```bash
      python manage.py createsuperuser
      ```
      *(Follow the prompts to set a username, email (optional), and password.)*

   g. **Run Backend Development Server:**
      Start the Django development server:
      ```bash
      python manage.py runserver
      ```
      By default, the backend API will be available at `http://127.0.0.1:8000/`. If you created a superuser, the admin panel will be at `http://127.0.0.1:8000/admin/`. The API endpoints (e.g., `/api/products/`) will be accessible under this base URL.

### 3. Frontend Setup (React)

   a. **Navigate to Frontend Directory:**
      Open a **new terminal window or tab** (keep the backend server running in the other one).
      If you cloned the repository, navigate into the frontend folder:
      ```bash
      cd frontend
      ```
      If starting from scratch, create and navigate into your frontend project directory (e.g., using `npx create-react-app frontend`).

   b. **Create `.env` File (for API URL):**
      Create a file named `.env` in the `frontend/` directory. This will tell your React app where the backend API is running:
      ```env
      # frontend/.env
      REACT_APP_API_URL=http://localhost:8000/api
      ```

   c. **Install Dependencies:**
      Install the necessary Node.js packages listed in `package.json`:
      ```bash
      npm install
      ```
      *(If you use Yarn: `yarn install`)*
      *(If you don't have a `package.json` yet because you're setting up from scratch, you'll need to install React, React Router, Axios, etc.: `npm install react react-dom react-router-dom axios`)*

   d. **Run Frontend Development Server:**
      Start the React development server:
      ```bash
      npm start
      ```
      *(If you use Yarn: `yarn start`)*
      The frontend application will typically be available at `http://localhost:3000` and should open automatically in your default web browser.

---

## Running the Application Locally

1.  **Start the Backend Server:**
    *   Open a terminal, navigate to the `backend/` directory.
    *   Activate the virtual environment (`source venv/bin/activate` or `venv\Scripts\activate`).
    *   Run `python manage.py runserver`.

2.  **Start the Frontend Server:**
    *   Open a *new* terminal, navigate to the `frontend/` directory.
    *   Run `npm start` (or `yarn start`).

3.  **Access the Application:**
    Open your web browser and go to `http://localhost:3000` (or the port specified by the React development server).

You should now be able to interact with your Simple Product Management application locally.

---

## Output

![image](https://github.com/user-attachments/assets/b79e18b7-abfc-4fc0-a522-73c10663f4c7)
![image](https://github.com/user-attachments/assets/e555f4e6-5b12-4d39-b3b5-e5d59c3cf061)
![image](https://github.com/user-attachments/assets/d819c541-8acc-4fa1-a6e7-0def6967d1ca)

---
