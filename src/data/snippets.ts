
export interface Snippet {
  id: string;
  content: string;
  media?: string;
  filter?: string;
  creatorId: string;
  creatorName: string;
  creatorAvatar?: string;
  visibility: 'public' | 'cluster' | 'private';
  mood?: 'serene' | 'playful' | 'reflective';
  likes: number;
  comments: number;
  createdAt: Date;
}

export const snippets: Snippet[] = [
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
  },
  {
    id: "3",
    content: "Working on a new melody today that captures that feeling when you're floating between clouds. Music is the language of dreams. 🎵",
    creatorId: "user3",
    creatorName: "Melody Weaver",
    creatorAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
    visibility: "public",
    mood: "playful",
    likes: 76,
    comments: 12,
    createdAt: new Date(Date.now() - 10800000), // 3 hours ago
  },
  {
    id: "4",
    content: "The rain is playing the most beautiful symphony on my window right now. Sometimes the universe composes the perfect soundtrack to your thoughts. ☔️",
    creatorId: "user4",
    creatorName: "Rain Listener",
    visibility: "public",
    mood: "serene",
    likes: 53,
    comments: 8,
    createdAt: new Date(Date.now() - 43200000), // 12 hours ago
  },
  {
    id: "5",
    content: "Baked cookies with my niece today. Her laughter is the most precious sound in the world. Small moments, big memories. 🍪",
    media: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    filter: "Starry Fade",
    creatorId: "user5",
    creatorName: "Joy Collector",
    creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    visibility: "public",
    mood: "playful",
    likes: 210,
    comments: 34,
    createdAt: new Date(Date.now() - 86400000), // 24 hours ago
  },
];
