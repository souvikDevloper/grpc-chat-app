const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

// Load the .proto file
const packageDefinition = protoLoader.loadSync("proto/chat.proto", {});
const chatProto = grpc.loadPackageDefinition(packageDefinition).chat;

// Create a gRPC client
const client = new chatProto.ChatService("127.0.0.1:50051", grpc.credentials.createInsecure());

// Function to send a message
function sendMessage(user, message) {
  client.SendMessage({ user, message }, (err, response) => {
    if (err) console.error("Error:", err);
    else console.log("✅ Message Sent!");
  });
}

// Function to get messages
function getMessages() {
  client.GetMessages({}, (err, response) => {
    if (err) console.error("Error:", err);
    else console.log("📜 Chat History:", response.messages);
  });
}

// Example usage
sendMessage("Alice", "Hello, world!");
setTimeout(getMessages, 1000);
