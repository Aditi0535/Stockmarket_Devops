# Stock Trading App Backend

This is the **backend** service for the Stock Trading App, built with **Node.js**, **Express**, and **MongoDB**.  
It provides RESTful APIs for handling contact form submissions and can be extended for additional features.

---

## 📁 Directory Structure

```
backend/
│
├── controllers/           # (Optional) Controller logic for routes
├── models/
│   └── Contact.js         # Mongoose schema for contact form
├── routes/
│   └── contactRoutes.js   # Express routes for contact API
├── .env                   # Environment variables (MongoDB URI, etc.)
├── package.json           # Project metadata and scripts
├── server.js              # Main server entry point
```

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```sh
git clone <your-repo-url>
cd stock-trading-app/backend
```

### 2. **Install Dependencies**

```sh
npm install
```

### 3. **Set Up Environment Variables**

Create a `.env` file in the `backend` directory:

```
MONGO_URI=mongodb://localhost:27017/contactform
```

- Change the MongoDB URI if using a remote database.

### 4. **Start MongoDB**

Make sure MongoDB is running locally:

```sh
mongod
```

### 5. **Run the Server**

For development (with auto-restart):

```sh
npm run dev
```

For production:

```sh
npm start
```

The server will run on [http://localhost:5000](http://localhost:5000).

---

## 📨 API Endpoints

### **Contact API**

#### `POST /api/contact`

Submit a contact form.

---

### **Contact**

Located at [`models/Contact.js`](models/Contact.js):

- `name`: String
- `email`: String
- `phone`: String
- `query`: String
- `timestamps`: Created/updated at

---

## ⚙️ Configuration

- **Port:** Defaults to `5000`
- **MongoDB URI:** Set in `.env` as `MONGO_URI`

---

## 🛠️ Development Notes

- Uses [nodemon](https://nodemon.io/) for development auto-reload.
- CORS enabled for API access from frontend.
- All contact form data is stored in the `contactform` database, `contacts` collection.

---

## 🧑‍💻 Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a pull request
