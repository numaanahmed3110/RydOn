# Backend Documentation

## Project Structure

```
backend/
│
├── controllers/
│   └── user.controller.js     # User-related controller logic
├── models/
│   ├── usermodel.js          # User database model schema
│   └── blacklisttoken.model.js # Token blacklist for logout
├── routes/
│   └── user.routes.js        # User route definitions
├── middleware/
│   └── auth.middleware.js    # Authentication middleware
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
- `blacklisttoken.model.js`: Manages blacklisted JWT tokens
- `user.routes.js`: Defines API endpoints and validation
- `auth.middleware.js`: Handles authentication validation
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

#### 3️⃣ Get User Profile

<details>
<summary><code>GET /users/profile</code> - Get authenticated user's profile</summary>

**Headers Required:**

```
Authorization: Bearer JWT_TOKEN
```

or

```
Cookie: token=JWT_TOKEN
```

**Response:**

- ✅ Success (200):

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "_id": "string"
}
```

- ❌ Error (401):

```json
{
  "message": "Unauthorized"
}
```

**Notes:**

- 🔒 Requires valid JWT token
- 🎫 Token can be sent via Authorization header or cookie
- ⚠️ Invalid/expired token will return 401 status code
</details>

#### 4️⃣ Logout User

<details>
<summary><code>GET /users/logout</code> - Logout current user</summary>

**Headers Required:**

```
Authorization: Bearer JWT_TOKEN
```

or

```
Cookie: token=JWT_TOKEN
```

**Response:**

- ✅ Success (200):

```json
{
  "message": "User Logged out"
}
```

- ❌ Error (401):

```json
{
  "message": "Unauthorized"
}
```

**What happens on logout:**

- 🔓 Clears authentication cookie
- ⛔ Adds token to blacklist
- 🚫 Blacklisted tokens cannot be reused
- ⏱️ Blacklisted tokens are automatically removed after 24 hours

**Notes:**

- 🔒 Requires valid JWT token
- 🎫 Token can be sent via Authorization header or cookie
- ⚠️ Invalid/expired token will return 401 status code
</details>

---

### 🚗 Captain Management

#### 1️⃣ Register Captain

<details>
<summary><code>POST /captains/register</code> - Create new captain account</summary>

**Request Body:**

```json
{
  "fullname": {
    "firstname": "string", // Required, min length: 3
    "lastname": "string" // Optional, min length: 3
  },
  "email": "string", // Required, valid email
  "password": "string", // Required, min length: 6
  "vehicle": {
    "color": "string", // Required, min length: 3
    "plate": "string", // Required, min length: 3
    "capacity": "number", // Required, min: 1
    "vehicleType": "string" // Required, enum: ["car", "auto", "motorcycle"]
  }
}
```

**Response:**

- ✅ Success (200):

```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    },
    "status": "inactive"
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

- 📧 Email must be valid and unique
- 📝 Firstname must be at least 3 characters long
- 🔑 Password must be at least 6 characters long
- 🚗 Vehicle color must be at least 3 characters long
- 🚙 Vehicle plate must be at least 3 characters long
- 💺 Vehicle capacity must be at least 1
- 🚖 Vehicle type must be one of: car, auto, motorcycle
</details>
