# Salary Sense  

Salary Sense is a simple yet powerful full-stack web application that predicts a user's salary based on their years of experience. It's designed to showcase a complete end-to-end Machine Learning project, from model creation to deployment as a web service.

## ✨ Features

- **Intuitive UI:** A clean and simple user interface built with Next.js.
- **Real-time Predictions:** Get salary predictions instantly by inputting years of experience.
- **RESTful API:** A robust backend powered by FastAPI to serve the machine learning model.
- **Scikit-learn Model:** Utilizes a Multiple Linear Regression model for salary prediction.

## 🛠️ Tech Stack

This project is a full-stack application with a distinct frontend and backend.

- **Frontend:**
  - [Next.js](https://nextjs.org/) - React framework for production.
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/) (or standard CSS) - For styling.

- **Backend (API):**
  - [FastAPI](https://fastapi.tiangolo.com/) - High-performance web framework for building APIs with Python.
  - [Scikit-learn](https://scikit-learn.org/) - For building and training the regression model.
  - [Joblib](https://joblib.readthedocs.io/) - For serializing and deserializing the trained model.
  - [Python](https://www.python.org/) - Core programming language.

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
- [Python](https://www.python.org/downloads/) (v3.8 or later)
- `pip` (Python package installer)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/kaushal-Prakash/salary-sense.git](https://github.com/kaushal-Prakash/salary-sense.git)
    cd salary-sense
    ```

2.  **Set up the Backend (FastAPI Server):**
    - Navigate to the backend directory:
      ```sh
      cd ai
      ```
    - Create and activate a virtual environment:
      ```sh
      # For macOS/Linux
      python3 -m venv venv
      source venv/bin/activate

      # For Windows
      python -m venv venv
      venv\Scripts\activate
      ```
    - Install the required Python packages:
      ```sh
      pip install -r requirements.txt
      ```
      *Note: If a `requirements.txt` file doesn't exist, you'll need to create one by running `pip freeze > requirements.txt` after installing `fastapi`, `uvicorn`, `scikit-learn`, and `joblib`.*

3.  **Set up the Frontend (Next.js App):**
    - In a new terminal, navigate to the frontend directory from the root folder:
      ```sh
      cd frontend
      ```
    - Install the required npm packages:
      ```sh
      npm install
      ```

### Running the Application

You need to run both the backend and frontend servers simultaneously in two separate terminals.

1.  **Start the Backend Server:**
    - In the terminal for the backend (`/ai` directory), run the following command:
      ```sh
      uvicorn index:app --reload
      ```
    - The API will be running at `http://127.0.0.1:8000`. You can check the interactive API docs at `http://127.0.0.1:8000/docs`.

2.  **Start the Frontend Server:**
    - In the terminal for the frontend (`/frontend` directory), run the following command:
      ```sh
      npm run dev
      ```
    - The application will be running at `http://localhost:3000`.

Open your browser and visit `http://localhost:3000` to use the Salary Sense app!

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
