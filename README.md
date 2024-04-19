Here's the updated README file with the additional cart endpoints:

---

# StoreHive Backend API Documentation

Welcome to the StoreHive Backend API documentation. This guide provides detailed information about the endpoints, payloads, and headers required to interact with the StoreHive backend services.

## Authentication Endpoints

### Login User

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "email": "abc@gmail.com",
    "password": "123"
  }
  ```
- **Response:**
  ```json
  {
    "userName": "abc",
    "id": "65eec814e4f63c313d9ae4f3",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "message": "Signin successful"
  }
  ```

### Signup User

- **Endpoint:** `/auth/signup`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "email": "abcde@gmail.com",
    "password": "123",
    "name": "abcde"
  }
  ```
- **Response:**
  ```
  signup successful
  ```

### Refresh Token

- **Endpoint:** `/auth/refresh`
- **Method:** `POST`
- **Headers:**
  ```
  Authorization: Bearer <refreshToken>
  ```
- **Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

## Products Endpoints

### Get All Products

- **Endpoint:** `/products`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "_id": "65a851c47f1c81c810c8a679",
      "name": "Tomatoes - Grape",
      "description": "Nullam molestie nibh in lectus.",
      "image": "http://dummyimage.com/204x100.png/dddddd/000000",
      "price": 797,
      "quantity": 47
    }
    // Other product objects...
  ]
  ```

## Cart Endpoints

### Get Cart Items

- **Endpoint:** `/cart`
- **Method:** `GET`
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Response:**
  ```json
  [
    {
      "_id": "66110c0393d7235c6864d2ed",
      "product": {
        "_id": "65a851c47f1c81c810c8a679",
        "name": "Tomatoes - Grape",
        "description": "Nullam molestie nibh in lectus.",
        "image": "http://dummyimage.com/204x100.png/dddddd/000000",
        "price": 797,
        "quantity": 47
      },
      "user": "65eec814e4f63c313d9ae4f3",
      "quantity": 2,
      "__v": 0
    }
    // Other cart item objects...
  ]
  ```

### Add Item to Cart

- **Endpoint:** `/cart`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "product": "65a851c47f1c81c810c8a682",
    "quantity": 1
  }
  ```
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Response:**
  ```json
  {
    "product": "65a851c47f1c81c810c8a682",
    "user": "65eec814e4f63c313d9ae4f3",
    "quantity": 1,
    "_id": "66221d067c808ce79f190737",
    "__v": 0
  }
  ```

### Edit Cart Item Quantity

- **Endpoint:** `/cart`
- **Method:** `PATCH`
- **Payload:**
  ```json
  {
    "product": "65a851c47f1c81c810c8a682",
    "quantity": 2
  }
  ```
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Response:**
  ```json
  {
    "_id": "66221d067c808ce79f190737",
    "product": {
      "_id": "65a851c47f1c81c810c8a682",
      "name": "Shrimp - Black Tiger 13/15",
      "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "image": "http://dummyimage.com/189x100.png/cc0000/ffffff",
      "price": 927,
      "quantity": 58
    },
    "user": "65eec814e4f63c313d9ae4f3",
    "quantity": 2,
    "__v": 0
  }
  ```

### Delete Cart Item

- **Endpoint:** `/cart`
- **Method:** `DELETE`
- **Payload:**
  ```json
  {
    "product": "65a851c47f1c81c810c8a679"
  }
  ```
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Response:**
  ```json
  {
    "_id": "66110c0393d7235c6864d2ed",
    "product": {
      "_id": "65a851c47f1c81c810c8a679",
      "name": "Tomatoes - Grape",
      "description": "Nullam molestie nibh in lectus.",
      "image": "http://dummyimage.com/204x100.png/dddddd/000000",
      "price": 797,
      "quantity": 47
    },
    "user": "65eec814e4f63c313d9ae4f3",
    "quantity": 2,
    "__v": 0
  }
  ```

---

LinkedIn : https://www.linkedin.com/in/saurabhvermasv/
Portfolio : https://saurabh-verma-portfolio.netlify.app/
