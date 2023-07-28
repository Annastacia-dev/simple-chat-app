/* Updated JavaScript (script.js) */
document.addEventListener('DOMContentLoaded', () => {
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');
  const chatMessages = document.getElementById('chatMessages');

  // Add event listeners for send button and Enter key
  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          sendMessage();
      }
  });

  // Array to store received messages
  const receivedMessages = [
      "Hello!",
      "How are you?",
      "Nice weather, isn't it?",
      "Have a great day!",
      "Goodbye!"
  ];

  function sendMessage() {
      const message = messageInput.value.trim();
      if (message !== '') {
          appendMessage('You', message, 'sent');
          messageInput.value = '';
          receiveMessage();
      }
  }

  function receiveMessage() {
      const randomIndex = Math.floor(Math.random() * receivedMessages.length);
      const message = receivedMessages[randomIndex];
      setTimeout(() => {
          appendMessage('Stranger', message, 'received');
      }, 1000); // Simulate delay in receiving message
  }

  function appendMessage(sender, message, messageType) {
      const messageElement = document.createElement('div');
      messageElement.className = `message ${messageType}`;
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;

      chatMessages.insertBefore(messageElement, chatMessages.firstChild);

      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
  }
});
