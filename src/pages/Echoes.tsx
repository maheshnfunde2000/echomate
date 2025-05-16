
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Cloud } from "lucide-react";
import SnippetCard from "@/components/SnippetCard";
import { Snippet } from "@/data/snippets";

const Echoes = () => {
  const [echoes, setEchoes] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEchoes = async () => {
      try {
        // For now, we'll use the local data since the backend server isn't actually running
        // In production, you would fetch from the API: await fetch('/api/echoes')
        const response = await import('@/data/snippets');
        setEchoes(response.snippets);
        setLoading(false);
      } catch (err) {
        setError("Failed to load echoes");
        setLoading(false);
      }
    };

    fetchEchoes();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pb-24">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-cloud-purple to-cloud-blue shadow-glow flex items-center justify-center mb-4">
            <Cloud className="h-10 w-10 text-white" />
          </div>
          <h3 className="font-quicksand text-xl font-medium mb-2">Echo Feed</h3>
          <p className="text-center text-muted-foreground mb-6 max-w-md">
            Discover and share ethereal thoughts in the cloud
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 pb-12">
          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-500">{error}</div>
          ) : (
            echoes.map(echo => (
              <SnippetCard key={echo.id} snippet={echo} />
            ))
          )}
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Echoes;
