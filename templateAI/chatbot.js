import { config } from "dotenv";
config();
import{Configuration, OpenAIApi} from "openai";
console.log(process.env.API_KEY);
// Function to send a user message to the chatbot
function sendMessage() {
    const userMessage = document.getElementById("user-input").value;
    addMessage("User", userMessage);
    processUserMessage(userMessage);
    document.getElementById("user-input").value = "";
  }
  
  // Function to add a message to the chatbot interface
  function addMessage(sender, message) {
    const chatbotMessages = document.getElementById("chatbot-messages");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender === "User" ? "user" : "bot"}`;
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  function processUserMessage(userMessage) {
    // Implement more advanced logic for intent detection and response generation
    const intent = detectIntent(userMessage);
  
    switch (intent) {
      case "Concepts":
        const conceptResponse = generateConceptResponse(userMessage);
        addMessage("Bot", conceptResponse);
        break;
      case "Project":
        const projectResponse = generateProjectResponse();
        addMessage("Bot", projectResponse);
        break;
      default:
        const defaultResponse = "I'm sorry, I don't have information on that specific topic. How about asking me about AI or our project?";
        addMessage("Bot", defaultResponse);
        break;
    }
  }
  
  function detectIntent(userMessage) {
    // Implement your intent detection logic here (e.g., using NLP libraries or services)
    // For simplicity, we'll use a predefined set of intents based on keywords
    const lowerCaseMessage = userMessage.toLowerCase();
  
    if (lowerCaseMessage.includes("what is AI") || lowerCaseMessage.includes("AI definition")) {
      return "Concepts";
    } else if (lowerCaseMessage.includes("your AI project") || lowerCaseMessage.includes("tell me about your project")) {
      return "Project";
    }
  
    return "Unknown";
  }
  
  function generateConceptResponse(userMessage) {
    // Implement a response based on the user's query about AI concepts
    // You can provide a detailed explanation about AI concepts here
    return "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.";
  }
  
  function generateProjectResponse() {
    // Implement a response about your AI project
    // Provide information about your AI project's goals, objectives, and any available resources
    return "Our AI project is about promoting AI education and awareness. We provide resources and information on AI technologies, applications, and learning opportunities.";
  }
  
  
  // Function to generate chatbot responses (simplified)
  function generateBotResponse(userMessage) {
    switch (userMessage.toLowerCase()) {
      case "hi":
      case "hello":
        return "Hello! How can I assist you with AI today?";
      case "what is AI?":
        return "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.";
      case "tell me about your AI project":
        return "Our AI project is about promoting AI education and awareness. We provide resources and information on AI technologies, applications, and learning opportunities.";
      default:
        return "I'm sorry, I don't have information on that specific topic. How about asking me about AI or our project?";
    }
  }
  
  // Initialize the chatbot interface
  addMessage("Bot", "Welcome! How can I help you with AI?");
  function toggleChatbox() {
    const chatbox = document.getElementById("chatbot-container");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
      chatbox.style.display = "block";
    } else {
      chatbox.style.display = "none";
    }
  }
  function toggleChatbox() {
    const chatbox = document.getElementById("chatbot-container");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
      chatbox.style.display = "block";
    } else {
      chatbox.style.display = "none";
    }
  }
  
  // Keep the chatbox open by default
  toggleChatbox();