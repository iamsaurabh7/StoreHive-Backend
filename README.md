Here's the structured README file based on the provided data:

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
    "email":"abc@gmail.com",
    "password":"123"
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
    "email":"abcde@gmail.com",
    "password":"123",
    "name":"abcde"
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
      },
      // Other product objects...
  ]
  ```

---

Feel free to add more endpoints or customize the content as needed. Let me know if you need further assistance!
