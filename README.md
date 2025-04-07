<<<<<<< HEAD
# Redux with CRUD

A simple CRUD (Create, Read, Update, Delete) application built using **React** and **Redux Toolkit**. This project demonstrates how to perform basic user management operations using global state managed by Redux, with a clean UI styled using Tailwind CSS.

---

## 🚀 Features

- 🧑‍💼 Add New User
- ✏️ Edit Existing User
- ❌ Delete User
- 📋 View All Users
- 🧠 State Management with Redux Toolkit
- 🎨 Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**

---

## 📂 Folder Structure

```
Redux-with-CRUD/
├── public/                
│   └── index.html
├── src/
│   ├── components/        
│   │   ├── AddEmp.jsx     
│   │   ├── UpdateEmp.js   
│   │   ├── ViewEmp.js   
│   │   └── Home.js       
│   ├── features/         
│   │   └── userSlice.js  
│   ├── App.js            
│   └── main.jsx          
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Yash21102001/Redux-with-CRUD.git
cd Redux-with-CRUD
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app should now be running at: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Key Concepts Used

- **Redux Toolkit**: `createSlice`, `configureStore`
- **React Redux Hooks**: `useSelector`, `useDispatch`
- **React Router DOM**: Page routing & navigation
- **Tailwind CSS**: Utility-first styling
- **Programmatic Navigation**: Using `useNavigate` from React Router

---

## 📸 Screenshots

*(Add screenshots here if available)*

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Created by [Yash21102001](https://github.com/Yash21102001)  
Feel free to fork, star ⭐, and contribute!
=======
Redux with CRUD - Project Overview
📌 Overview
This project demonstrates a simple CRUD (Create, Read, Update, Delete) application built with React and Redux. It serves as an educational example for managing state in React applications using Redux for state management.

✨ Features
Full CRUD Operations: Create, Read, Update, and Delete items

Redux State Management: Centralized state using Redux

React Integration: Built with React functional components

Modern UI: Clean and responsive interface

Persistent State: State persists through page refreshes

🏗️ Project Structure
Copy
redux-with-crud/
├── public/                  # Static files
├── src/
│   ├── actions/             # Redux action creators
│   │   └── itemActions.js
│   ├── components/          # React components
│   │   ├── ItemForm.js      # Form for adding/editing items
│   │   └── ItemList.js      # List display of all items
│   ├── reducers/            # Redux reducers
│   │   ├── index.js         # Root reducer
│   │   └── itemReducer.js   # Item-specific reducer
│   ├── store/               # Redux store configuration
│   │   └── store.js
│   ├── App.js               # Main application component
│   ├── index.css            # Global styles
│   └── index.js             # Application entry point
├── package.json             # Project dependencies
└── README.md                # Project documentation
🛠️ Installation
Clone the repository:

bash
Copy
git clone https://github.com/Yash21102001/Redux-with-CRUD.git
Navigate to the project directory:

bash
Copy
cd Redux-with-CRUD
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
🎨 Design
The application features a clean, minimalist design with:

Card-based layout for items

Modal forms for Create/Update operations

Action buttons with clear visual feedback

Responsive design that works on mobile and desktop

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Redux team for the amazing state management library

React community for continuous support and resources

Made with ❤️ by Yash
>>>>>>> 5cf1ff2542b97767eec61eb2758634222aa816c6
