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

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulated reply after 1 second
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.classList.add("message", "received");
    reply.textContent = "This is an automated reply.";
    chatBox.appendChild(reply);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}

// Send message on Enter key
document.getElementById("messageInput")
  .addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
