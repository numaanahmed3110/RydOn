# Backend Documentation

## Project Structure

```
backend/
│
├── controllers/
│   └── user.controller.js     # User-related controller logic
├── models/
│   └── usermodel.js          # User database model schema
├── routes/
│   └── user.routes.js        # User route definitions
├── service/
│   └── user.service.js       # User business logic
├── db/
│   └── db.js                # Database connection setup
├── app.js                    # Express application setup
├── server.js                 # Server initialization
└── readme.md                 # Documentation (this file)
```

## Files Overview

- `user.controller.js`: Handles HTTP request/response logic
- `usermodel.js`: Defines user schema and authentication methods
- `user.routes.js`: Defines API endpoints and validation
- `user.service.js`: Contains business logic for user operations
- `app.js`: Main Express application configuration
- `server.js`: Server startup configuration
- `db.js`: MongoDB connection handling

## API Endpoints

---

### 🔐 Authentication

#### 1️⃣ Register User

<details>
<summary><code>POST /users/register</code> - Create new user account</summary>

**Request Body:**

```json
{
  "fullname": {
    "firstname": "string", // Required, min length: 3
    "lastname": "string" // Optional, min length: 3
  },
  "email": "string", // Required, valid email
  "password": "string" // Required, min length: 6
}
```

**Response:**

- ✅ Success (200):

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

- ❌ Error (400):

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name"
    }
  ]
}
```

**Validation Rules:**

- 📧 Email must be valid
- 📝 Firstname must be at least 3 characters long
- 🔑 Password must be at least 6 characters long
</details>

#### 2️⃣ Login User

<details>
<summary><code>POST /users/login</code> - Authenticate existing user</summary>

**Request Body:**

```json
{
  "email": "string", // Required, valid email
  "password": "string" // Required
}
```

**Response:**

- ✅ Success (200):

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}
```

- ❌ Error (401):

```json
{
  "message": "Invalid credentials"
}
```

- ❌ Error (400):

```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name"
    }
  ]
}
```

**Validation Rules:**

- 📧 Email must be valid
- 🔑 Password is required

**Notes:**

- 🎫 Returns JWT token for authenticated requests
- 🔒 User password is never returned in the response
- ⚠️ Invalid credentials will return a 401 status code
- ❌ Invalid request format will return a 400 status code
</details>

---
