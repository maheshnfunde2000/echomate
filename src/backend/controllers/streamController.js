
// Mock data to simulate database
const streams = [
  {
    id: "1",
    title: "Morning Meditation",
    description: "Start your day with a calm, guided meditation session",
    creatorId: "user5",
    creatorName: "Joy Collector",
    isLive: true,
    viewers: 42,
    scheduledFor: new Date(Date.now() - 1800000), // Started 30 minutes ago
    thumbnailUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=225&fit=crop"
  },
  {
    id: "2",
    title: "Lo-fi Beats & Chill",
    description: "Relaxing beats to study/work to",
    creatorId: "user3",
    creatorName: "Melody Weaver",
    isLive: true,
    viewers: 128,
    scheduledFor: new Date(Date.now() - 3600000), // Started 1 hour ago
    thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=225&fit=crop"
  },
  {
    id: "3",
    title: "Creative Writing Workshop",
    description: "Join us for tips and exercises to enhance your writing",
    creatorId: "user1",
    creatorName: "Morning Dreamer",
    isLive: false,
    viewers: 0,
    scheduledFor: new Date(Date.now() + 86400000), // Scheduled for tomorrow
    thumbnailUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=225&fit=crop"
  }
];

// Get all streams
const getStreams = (req, res) => {
  res.status(200).json({ success: true, data: streams });
};

// Create a new stream
const createStream = (req, res) => {
  const { title, description, scheduledFor, thumbnailUrl } = req.body;
  
  // In a real app, you would validate the input and authenticate the user
  
  const newStream = {
    id: Date.now().toString(),
    title,
    description,
    creatorId: "mock-user-id", // In a real app, this would come from authentication
    creatorName: "Mock User", // In a real app, this would come from authentication
    isLive: false,
    viewers: 0,
    scheduledFor: scheduledFor ? new Date(scheduledFor) : new Date(),
    thumbnailUrl: thumbnailUrl || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=225&fit=crop" // Default thumbnail
  };
  
  streams.unshift(newStream);
  res.status(201).json({ success: true, data: newStream });
};

module.exports = {
  getStreams,
  createStream
};
