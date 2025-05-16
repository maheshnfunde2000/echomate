
// Mock data to simulate database
const echoes = [
  {
    id: "1",
    content: "Just watched the sunrise from my balcony. The world feels so peaceful and full of possibilities when bathed in that golden light. ✨",
    creatorId: "user1",
    creatorName: "Morning Dreamer",
    creatorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    visibility: "public",
    mood: "serene",
    likes: 42,
    comments: 7,
    createdAt: new Date(Date.now() - 3600000), // 1 hour ago
  },
  {
    id: "2",
    content: "Found this incredible hidden garden in the city today. Nature always finds a way to surprise us, even in concrete jungles. 🌿",
    media: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
    filter: "Mist Glow",
    creatorId: "user2",
    creatorName: "Urban Explorer",
    visibility: "public",
    mood: "reflective",
    likes: 128,
    comments: 23,
    createdAt: new Date(Date.now() - 7200000), // 2 hours ago
  }
];

// Get all echoes
const getEchoes = (req, res) => {
  res.status(200).json({ success: true, data: echoes });
};

// Create a new echo
const createEcho = (req, res) => {
  const { content, media, filter, visibility, mood } = req.body;
  
  // In a real app, you would validate the input and authenticate the user
  
  const newEcho = {
    id: Date.now().toString(),
    content,
    media,
    filter,
    creatorId: "mock-user-id", // In a real app, this would come from authentication
    creatorName: "Mock User", // In a real app, this would come from authentication
    visibility: visibility || "public",
    mood: mood || "serene",
    likes: 0,
    comments: 0,
    createdAt: new Date()
  };
  
  echoes.unshift(newEcho);
  res.status(201).json({ success: true, data: newEcho });
};

module.exports = {
  getEchoes,
  createEcho
};
