
// Mock data to simulate database
const chats = [
  {
    id: "1",
    name: "Design Enthusiasts",
    participants: ["user1", "user2", "user3"],
    lastMessage: "I love the new cloud theme!",
    lastMessageTime: new Date(Date.now() - 3600000) // 1 hour ago
  },
  {
    id: "2",
    name: "Morning Meditation",
    participants: ["user1", "user4"],
    lastMessage: "Did anyone try the new breathing technique?",
    lastMessageTime: new Date(Date.now() - 86400000) // 1 day ago
  }
];

const messages = {
  "1": [
    {
      id: "msg1",
      chatId: "1",
      senderId: "user2",
      senderName: "Urban Explorer",
      content: "Has anyone seen the new cloud animation effect?",
      createdAt: new Date(Date.now() - 7200000) // 2 hours ago
    },
    {
      id: "msg2",
      chatId: "1",
      senderId: "user3",
      senderName: "Melody Weaver",
      content: "Yes! The particle effects are incredible.",
      createdAt: new Date(Date.now() - 3600000) // 1 hour ago
    },
    {
      id: "msg3",
      chatId: "1",
      senderId: "user1",
      senderName: "Morning Dreamer",
      content: "I love the new cloud theme!",
      createdAt: new Date(Date.now() - 3600000) // 1 hour ago
    }
  ],
  "2": [
    {
      id: "msg4",
      chatId: "2",
      senderId: "user4",
      senderName: "Rain Listener",
      content: "Good morning everyone! Ready for today's session?",
      createdAt: new Date(Date.now() - 86400000) // 1 day ago
    },
    {
      id: "msg5",
      chatId: "2",
      senderId: "user1",
      senderName: "Morning Dreamer",
      content: "Did anyone try the new breathing technique?",
      createdAt: new Date(Date.now() - 86400000) // 1 day ago
    }
  ]
};

// Get all chats
const getChats = (req, res) => {
  res.status(200).json({ success: true, data: chats });
};

// Create a new chat
const createChat = (req, res) => {
  const { name, participants } = req.body;
  
  // In a real app, you would validate the input and authenticate the user
  
  const newChat = {
    id: Date.now().toString(),
    name,
    participants: [...participants, "mock-user-id"], // In a real app, this would include the authenticated user
    lastMessage: "",
    lastMessageTime: new Date()
  };
  
  chats.unshift(newChat);
  messages[newChat.id] = []; // Initialize empty message array for this chat
  
  res.status(201).json({ success: true, data: newChat });
};

// Get messages for a specific chat
const getChatMessages = (req, res) => {
  const { id } = req.params;
  
  if (!messages[id]) {
    return res.status(404).json({ success: false, error: "Chat not found" });
  }
  
  res.status(200).json({ success: true, data: messages[id] });
};

module.exports = {
  getChats,
  createChat,
  getChatMessages
};
