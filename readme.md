# PSQUARE Inventory Management System

A full-stack inventory management application built with **React** frontend and **Node.js/Express** backend, featuring image upload capabilities and MongoDB database integration.

## 🚀 Project Overview

This project is an inventory management system that allows users to manage products with features like adding new items, image uploads, and categorization. The application follows a modern full-stack architecture with separate frontend and backend services.

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## 📁 Project Structure

```
PSQUARE-ASSIGNMENT/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── inventory.controller.js
│   │   ├── models/
│   │   │   └── inventory.models.js
│   │   ├── routes/
│   │   │   └── inventory.routes.js
│   │   ├── utils/
│   │   │   ├── asyncHandler.js
│   │   │   ├── apiResponse.js
│   │   │   ├── statusCodes.js
│   │   │   └── multer.js
│   │   ├── db/
│   │   │   └── db.js
│   │   └── app.js
│   ├── uploads/
│   │   └── images/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
└── README.md
```

## ⚙️ Features

- ✅ **Inventory Management** - Add, view, and manage inventory items
- ✅ **Image Upload** - Upload and store product images locally
- ✅ **Data Validation** - Server-side validation for all inputs
- ✅ **Error Handling** - Comprehensive error handling with custom responses
- ✅ **RESTful API** - Clean API endpoints following REST principles
- ✅ **File Storage** - Local file storage with organized directory structure
- ✅ **CORS Support** - Cross-origin requests enabled for frontend-backend communication

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anant211205/psquare-assignment.git
   cd psquare-assignment
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Configuration

Create a `.env` file in the backend directory:

```env
# Database Configuration
MONGODB_URL=mongodb://127.0.0.1:27017/matrix
# For MongoDB Atlas:
# MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/matrix?retryWrites=true&w=majority

# Server Configuration
PORT=3000
```

### Database Setup

#### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service:
   ```bash
   mongod
   ```

#### Option 2: MongoDB Atlas (Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URL` in `.env` file

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   # or
   npm start
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Add New Inventory Item
- **POST** `/inventory/add-inventory`
- **Content-Type**: `multipart/form-data`

**Request Body:**
```javascript
{
  itemName: "Product Name",      // String, required
  category: "Electronics",       // String, required
  price: 299.99,                // Number, required
  description: "Product desc",   // String, required
  popular: true,                // Boolean, optional
  image: [File]                 // File, optional
}
```

**Response:**
```javascript
{
  statusCode: 201,
  data: {
    _id: "...",
    itemName: "Product Name",
    category: "Electronics",
    price: 299.99,
    description: "Product description",
    popular: true,
    image: "/uploads/images/image-1234567890-123456789.jpg",
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z"
  },
  message: "New item added successfully",
  success: true
}
```

### Error Responses

```javascript
// Validation Error
{
  statusCode: 400,
  data: null,
  message: "All fields are required",
  success: false
}

// Item Already Exists
{
  statusCode: 400,
  data: null,
  message: "Item with this name already exists",
  success: false
}

// Server Error
{
  statusCode: 500,
  data: null,
  message: "Internal server error",
  success: false
}
```

## 🗄️ Database Schema

### Inventory Model
```javascript
{
  itemName: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  popular: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}
```


### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running locally or check Atlas connection string
   - Verify network connectivity and firewall settings

2. **File Upload Issues**
   - Check if `uploads/images` directory exists
   - Verify file permissions
   - Ensure file size is under 5MB

3. **CORS Errors**
   - Check if CORS is properly configured in `app.js`
   - Verify frontend and backend URLs

4. **Module Import Errors**
   - Ensure `"type": "module"` is set in `package.json`
   - Use `.js` extensions in import statements
