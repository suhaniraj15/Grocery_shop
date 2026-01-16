# 🛒 Grocery Shop – ReactJS Group Project

## 📌 Project Overview
This project is a **responsive Grocery Shopping Web Application** built using **ReactJS and Bootstrap**.  
The application allows users to browse products, search and filter items, manage a shopping cart, authenticate users, and securely place orders.

The project follows **clean code principles**, **modular component structure**, and **real-world React practices** such as routing, state management, and protected routes.

---

## 🚀 Tech Stack
- **Frontend:** ReactJS (Vite)
- **Styling:** Bootstrap 5 + Custom CSS
- **Routing:** React Router DOM
- **State Management:** Context API
- **Storage:** LocalStorage
- **Deployment:** Netlify

---

## ✨ Key Features
- Product listing with real images
- Search and category-based filtering
- Product details page
- Add to cart / remove from cart
- Quantity update and price calculation
- Login & Signup with validation
- Protected checkout route
- Persistent cart using LocalStorage
- Fully responsive UI

---

## 👥 Group Work Distribution (5 Students)

### 👩‍🎓 Student 1 – UI & Layout
**Responsibilities:**
- Navbar design
- Footer design
- Home page UI
- Bootstrap grid system
- Responsive design (mobile, tablet, desktop)
- Overall UI/UX consistency

**Technologies Used:**
- Bootstrap 5
- Custom CSS
- React Components

---

### 👩‍🎓 Student 2 – Product Management
**Responsibilities:**
- Product listing page
- Product details page
- Dummy product data creation
- Category handling
- Image handling & fallback logic

**Technologies Used:**
- JavaScript (ES6)
- React Props
- Array mapping & filtering

---

### 👩‍🎓 Student 3 – Cart & State Management
**Responsibilities:**
- Add to cart functionality
- Remove product from cart
- Update quantity
- Total price calculation
- Cart persistence using LocalStorage
- Global cart state using Context API

**Technologies Used:**
- React Context API
- useState & useEffect
- LocalStorage

---

### 👩‍🎓 Student 4 – Authentication & Routing
**Responsibilities:**
- Login page
- Signup page
- Form validation
- Authentication logic
- Protected routes
- React Router configuration

**Technologies Used:**
- React Router DOM
- LocalStorage
- Conditional rendering

---

### 👩‍🎓 Student 5 – Search, Filter & Deployment
**Responsibilities:**
- Search functionality
- Category-based filter
- Combined search + filter logic
- Deployment on Netlify
- Build optimization
- Final testing & bug fixing

**Technologies Used:**
- JavaScript array methods
- Vite build tool
- Netlify

---

## 📁 Project Folder Structure
src/
│── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── ProductCard.jsx
│ ├── ProtectedRoute.jsx
│
│── pages/
│ ├── Home.jsx
│ ├── Products.jsx
│ ├── ProductDetails.jsx
│ ├── Cart.jsx
│ ├── Checkout.jsx
│ ├── Login.jsx
│ ├── Signup.jsx
│
│── context/
│ └── CartContext.jsx
│
│── data/
│ └── products.js
│
│── App.jsx
│── main.jsx
│── index.css
