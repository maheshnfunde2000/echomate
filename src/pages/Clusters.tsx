
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Cluster {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  image: string;
  createdAt: Date;
}

const Clusters = () => {
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchClusters = async () => {
      try {
        // For now we'll use mock data since the backend isn't running
        // In production: const response = await fetch('/api/clusters');
        setTimeout(() => {
          const mockClusters = [
            {
              id: "1",
              name: "Poetry Clouds",
              description: "A place to share and discuss poetry",
              memberCount: 342,
              image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=300&fit=crop",
              createdAt: new Date(Date.now() - 30 * 86400000)
            },
            {
              id: "2",
              name: "Tech Breezes",
              description: "Discussions about the latest in technology",
              memberCount: 512,
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
              createdAt: new Date(Date.now() - 45 * 86400000)
            },
            {
              id: "3",
              name: "Mindful Moments",
              description: "Share your mindfulness practices and experiences",
              memberCount: 278,
              image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=300&fit=crop",
              createdAt: new Date(Date.now() - 15 * 86400000)
            }
          ];
          setClusters(mockClusters);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError("Failed to load clusters");
        setLoading(false);
      }
    };

    fetchClusters();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pb-24">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-cloud-purple to-cloud-blue shadow-glow flex items-center justify-center mb-4">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h3 className="font-quicksand text-xl font-medium mb-2">Echo Clusters</h3>
          <p className="text-center text-muted-foreground mb-6 max-w-md">
            Join communities of like-minded echo creators
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
            {clusters.map((cluster) => (
              <div key={cluster.id} className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-40 relative">
                  <img src={cluster.image} alt={cluster.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <h4 className="font-quicksand font-medium text-xl">{cluster.name}</h4>
                    <p className="text-sm text-white/80">{cluster.memberCount.toLocaleString()} members</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground">{cluster.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Created {new Date(cluster.createdAt).toLocaleDateString()}</span>
                    <Button variant="ghost" size="sm" className="text-cloud-blue hover:text-cloud-purple">
                      Join <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      
      <Navigation />
    </div>
  );
};

export default Clusters;
