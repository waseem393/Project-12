function sendMessage() {
  const input = document.getElementById("messageInput");
  const chatBox = document.getElementById("chatBox");

  const text = input.value.trim();
  if (text === "") return;

  // Create sent message
  const sentMsg = document.createElement("div");
  sentMsg.classList.add("message", "sent");
  sentMsg.textContent = text;
  chatBox.appendChild(sentMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Generate smart reply
  setTimeout(() => {
    const replyText = generateReply(text);

    const reply = document.createElement("div");
    reply.classList.add("message", "received");
    reply.textContent = replyText;
    chatBox.appendChild(reply);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800 + Math.random() * 800);
}


// Smart Reply Generator
function generateReply(message) {
  const msg = message.toLowerCase();

  // Greetings
  if (msg.includes("hi") || msg.includes("hello")) {
    return randomReply([
      "Hello! 😊",
      "Hi there!",
      "Hey! How can I help you?",
      "Nice to see you!"
    ]);
  }

  // How are you
  if (msg.includes("how are you")) {
    return randomReply([
      "I'm doing great! Thanks for asking 😄",
      "I'm just code, but I'm feeling awesome!",
      "All good here! What about you?"
    ]);
  }

  // Time
  if (msg.includes("time")) {
    return "Current time is: " + new Date().toLocaleTimeString();
  }

  // Date
  if (msg.includes("date")) {
    return "Today's date is: " + new Date().toLocaleDateString();
  }

  // Joke
  if (msg.includes("joke")) {
    return randomReply([
      "Why don't programmers like nature? Too many bugs 🐛",
      "Why did the computer go to therapy? It had too many bytes of anxiety!",
      "Why was the JavaScript developer sad? Because he didn't 'null' his feelings."
    ]);
  }

  // Name
  if (msg.includes("your name")) {
    return "I'm your Chat UI Simulator 🤖";
  }

  // Thanks
  if (msg.includes("thank")) {
    return randomReply([
      "You're welcome!",
      "Anytime 😊",
      "Glad I could help!"
    ]);
  }

  // Default AI-like reply
  return randomReply([
    "That's interesting!",
    "Tell me more about that.",
    "Why do you think that?",
    "Hmm 🤔 can you explain more?",
    "I see! Go on...",
    "That sounds cool!"
  ]);
}


// Helper for random replies
function randomReply(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


// Send on Enter
document.getElementById("messageInput")
  .addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
