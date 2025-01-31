require("dotenv").config();
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const connectDB = require("./db");
const ChatMessage = require("./models/ChatMessage");

// Load the .proto file
const packageDefinition = protoLoader.loadSync("proto/chat.proto", {});
const chatProto = grpc.loadPackageDefinition(packageDefinition).chat;

// Connect to MongoDB
connectDB();

// Implement gRPC methods
const chatService = {
  SendMessage: async (call, callback) => {
    const { user, message } = call.request;
    const chatMessage = new ChatMessage({ user, message });
    await chatMessage.save();
    console.log(`💬 New Message from ${user}: ${message}`);
    callback(null, {});
  },

  GetMessages: async (call, callback) => {
    const messages = await ChatMessage.find().sort({ timestamp: -1 }).limit(10);
    callback(null, { messages });
  },
};

// Start the gRPC Server
const server = new grpc.Server();
server.addService(chatProto.ChatService.service, chatService);
server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(), () => {
  console.log("🚀 gRPC Server running at 127.0.0.1:50051");
  server.start();
});
