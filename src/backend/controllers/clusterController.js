
// Mock data to simulate database
const clusters = [
  {
    id: "1",
    name: "Poetry Clouds",
    description: "A place to share and discuss poetry",
    memberCount: 342,
    image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=300&fit=crop",
    createdAt: new Date(Date.now() - 30 * 86400000) // 30 days ago
  },
  {
    id: "2",
    name: "Tech Breezes",
    description: "Discussions about the latest in technology",
    memberCount: 512,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    createdAt: new Date(Date.now() - 45 * 86400000) // 45 days ago
  },
  {
    id: "3",
    name: "Mindful Moments",
    description: "Share your mindfulness practices and experiences",
    memberCount: 278,
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=300&fit=crop",
    createdAt: new Date(Date.now() - 15 * 86400000) // 15 days ago
  }
];

// Get all clusters
const getClusters = (req, res) => {
  res.status(200).json({ success: true, data: clusters });
};

// Create a new cluster
const createCluster = (req, res) => {
  const { name, description, image } = req.body;
  
  // In a real app, you would validate the input and authenticate the user
  
  const newCluster = {
    id: Date.now().toString(),
    name,
    description,
    memberCount: 1, // Starting with the creator
    image: image || "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=400&h=300&fit=crop", // Default image
    createdAt: new Date()
  };
  
  clusters.unshift(newCluster);
  res.status(201).json({ success: true, data: newCluster });
};

module.exports = {
  getClusters,
  createCluster
};
