
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Chat {
  id: string;
  name: string;
  participants: string[];
  lastMessage: string;
  lastMessageTime: Date;
}

const Chats = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChats = async () => {
      try {
        // For now we'll use mock data since the backend isn't running
        // In production: const response = await fetch('/api/chats');
        setTimeout(() => {
          const mockChats = [
            {
              id: "1",
              name: "Design Enthusiasts",
              participants: ["user1", "user2", "user3"],
              lastMessage: "I love the new cloud theme!",
              lastMessageTime: new Date(Date.now() - 3600000)
            },
            {
              id: "2",
              name: "Morning Meditation",
              participants: ["user1", "user4"],
              lastMessage: "Did anyone try the new breathing technique?",
              lastMessageTime: new Date(Date.now() - 86400000)
            },
            {
              id: "3",
              name: "Photo Sharing",
              participants: ["user2", "user3", "user5"],
              lastMessage: "Check out this sunset I captured yesterday!",
              lastMessageTime: new Date(Date.now() - 43200000)
            }
          ];
          setChats(mockChats);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError("Failed to load chats");
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pb-24">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-cloud-purple to-cloud-blue shadow-glow flex items-center justify-center mb-4">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>
          <h3 className="font-quicksand text-xl font-medium mb-2">Chat Cloud</h3>
          <p className="text-center text-muted-foreground mb-6 max-w-md">
            Connect with others in ethereal conversations
          </p>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : (
          <div className="max-w-2xl mx-auto">
            {chats.map((chat) => (
              <div key={chat.id} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-4">
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-quicksand font-medium text-lg">{chat.name}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">{chat.lastMessage}</p>
                    <span className="text-xs text-muted-foreground">
                      {new Date(chat.lastMessageTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-cloud-blue hover:text-cloud-purple">
                    Open <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="mt-6 text-center">
              <Button className="bg-gradient-to-r from-cloud-purple to-cloud-blue text-white shadow-glow">
                Start New Chat
              </Button>
            </div>
          </div>
        )}
      </main>
      
      <Navigation />
    </div>
  );
};

export default Chats;
