
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Mic, Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Stream {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  creatorName: string;
  isLive: boolean;
  viewers: number;
  scheduledFor: Date;
  thumbnailUrl: string;
}

const Streams = () => {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        // For now we'll use mock data since the backend isn't running
        // In production: const response = await fetch('/api/streams');
        setTimeout(() => {
          const mockStreams = [
            {
              id: "1",
              title: "Morning Meditation",
              description: "Start your day with a calm, guided meditation session",
              creatorId: "user5",
              creatorName: "Joy Collector",
              isLive: true,
              viewers: 42,
              scheduledFor: new Date(Date.now() - 1800000),
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
              scheduledFor: new Date(Date.now() - 3600000),
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
              scheduledFor: new Date(Date.now() + 86400000),
              thumbnailUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=225&fit=crop"
            }
          ];
          setStreams(mockStreams);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError("Failed to load streams");
        setLoading(false);
      }
    };

    fetchStreams();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pb-24">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-cloud-purple to-cloud-blue shadow-glow flex items-center justify-center mb-4">
            <Mic className="h-10 w-10 text-white" />
          </div>
          <h3 className="font-quicksand text-xl font-medium mb-2">Echo Streams</h3>
          <p className="text-center text-muted-foreground mb-6 max-w-md">
            Live audio and video experiences in the cloud
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {streams.map((stream) => (
              <div key={stream.id} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img src={stream.thumbnailUrl} alt={stream.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {stream.isLive ? (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                      <span className="h-2 w-2 bg-white rounded-full mr-1 animate-pulse"></span>
                      LIVE • {stream.viewers} watching
                    </div>
                  ) : (
                    <div className="absolute top-3 left-3 bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(stream.scheduledFor).toLocaleString()}
                    </div>
                  )}
                  
                  <div className="absolute bottom-3 left-4 text-white">
                    <h4 className="font-quicksand font-medium text-lg">{stream.title}</h4>
                    <p className="text-sm text-white/80">by {stream.creatorName}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm">{stream.description}</p>
                  <div className="mt-4 flex justify-end">
                    <Button className={stream.isLive ? "bg-gradient-to-r from-cloud-pink to-cloud-purple text-white" : "bg-gradient-to-r from-cloud-purple to-cloud-blue text-white"}>
                      {stream.isLive ? (
                        <>
                          <Play className="mr-2 h-4 w-4 fill-current" /> Join Stream
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-4 w-4" /> Set Reminder
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <Button className="bg-gradient-to-r from-cloud-purple to-cloud-blue text-white shadow-glow">
            Create New Stream
          </Button>
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Streams;
