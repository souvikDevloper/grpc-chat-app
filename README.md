# gRPC Chat App with MongoDB

## 🚀 Overview
This is a real-time chat application using **gRPC** and **MongoDB**,
 built with **Node.js**. It enables users to send and retrieve messages efficiently through gRPC
  API calls, offering a high-performance alternative to traditional REST APIs.


## 📌 Features
- 🚀 **High-speed** messaging with gRPC

- 🗄 **MongoDB integration** for chat history storage

- 🔄 **Bi-directional streaming (future improvement)**

- 🛡 **Secure communication with TLS (upcoming)**

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/grpc-chat-app.git
cd grpc-chat-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start MongoDB
Ensure MongoDB is installed and running:
```sh

sudo systemctl start mongod
```

### 4️⃣ Start the gRPC Server
```sh
node server.js
```
Expected output:
```
✅ MongoDB Connected

🚀 gRPC Server running at 127.0.0.1:50051
```

### 5️⃣ Run the gRPC Client

Open another terminal and execute:

```sh
node client.js
```
Expected output:

```
✅ Message Sent!
📜 Chat History: [ { user: 'Alice', message: 'Hello!', timestamp: '...' } ]
```

## 🏗 Project Structure
```
grpc-chat-app/
│── proto/            # gRPC Protobuf definitions
│── server.js         # gRPC Server
│── client.js         # gRPC Client
│── models/           # MongoDB Schema
│── .gitignore        # Ignoring unnecessary files
│── README.md         # Project Documentation
```

## 🎯 Future Enhancements
- 🔹 **Frontend UI** (React/Vue for real-time chat)
- 🔹 **WebSockets integration**
- 🔹 **Deploy on AWS/DigitalOcean**

## 🤝 Contributing
Feel free to **fork** this repository, make enhancements, and submit a **pull request**!

## 📝 License
This project is licensed under the **MIT License**.

---
### 💬 Need Help?
Open an issue or reach out to me on [GitHub](https://github.com/yourusername).

🚀 Happy Coding! 🎉

