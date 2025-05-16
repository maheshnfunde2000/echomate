
import React, { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ParticlesBackground from "@/components/ParticlesBackground";
import SnippetCard from "@/components/SnippetCard";
import { snippets } from "@/data/snippets";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, Star, Zap } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("for-you");

  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Header />
      
      <main className="container mx-auto px-4 pb-24">
        {/* Mood Selection */}
        <div className="my-4">
          <h2 className="font-quicksand text-lg font-medium mb-3">Today's Mood</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              className="bg-gradient-serene text-white border-none rounded-full px-5 shadow-sm hover:shadow-glow"
            >
              Serene
            </Button>
            <Button
              variant="outline"
              className="bg-gradient-playful text-white border-none rounded-full px-5 shadow-sm hover:shadow-glow"
            >
              Playful
            </Button>
            <Button
              variant="outline"
              className="bg-gradient-pastel text-white border-none rounded-full px-5 shadow-sm hover:shadow-glow"
            >
              Reflective
            </Button>
          </div>
        </div>
        
        {/* Feed Tabs */}
        <div className="my-6">
          <Tabs defaultValue="for-you" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-white bg-opacity-70 backdrop-blur-sm p-1 rounded-full">
              <TabsTrigger 
                value="for-you"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cloud-purple data-[state=active]:to-cloud-blue data-[state=active]:text-white"
              >
                <Zap className="h-4 w-4 mr-1" />
                For You
              </TabsTrigger>
              <TabsTrigger 
                value="following"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cloud-purple data-[state=active]:to-cloud-blue data-[state=active]:text-white"
              >
                <Cloud className="h-4 w-4 mr-1" />
                Following
              </TabsTrigger>
              <TabsTrigger 
                value="trending"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-cloud-purple data-[state=active]:to-cloud-blue data-[state=active]:text-white"
              >
                <Star className="h-4 w-4 mr-1" />
                Trending
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="for-you" className="mt-6 space-y-4">
              {snippets.map(snippet => (
                <SnippetCard key={snippet.id} snippet={snippet} />
              ))}
            </TabsContent>
            
            <TabsContent value="following" className="mt-6">
              <div className="flex flex-col items-center justify-center py-20">
                <div className="h-20 w-20 rounded-full bg-gradient-pastel shadow-glow flex items-center justify-center mb-4">
                  <Cloud className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-quicksand text-xl font-medium mb-2">Connect with Others</h3>
                <p className="text-center text-muted-foreground mb-4 max-w-md">
                  Find and follow people to see their echoes in your stream
                </p>
                <Button className="cloud-button px-6 py-3">
                  Discover Clouds
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="trending" className="mt-6">
              <div className="flex flex-col items-center justify-center py-20">
                <div className="h-20 w-20 rounded-full bg-gradient-pastel shadow-glow flex items-center justify-center mb-4">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-quicksand text-xl font-medium mb-2">Trending Echoes</h3>
                <p className="text-center text-muted-foreground mb-4 max-w-md">
                  Coming soon! Discover the most popular echoes across the platform
                </p>
                <Button className="cloud-button px-6 py-3">
                  Notify Me
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Navigation />
      
      {/* Create Button */}
      <Button className="fixed bottom-24 right-6 h-16 w-16 rounded-full shadow-lg bg-gradient-to-r from-cloud-purple to-cloud-blue text-white font-quicksand font-bold text-2xl z-10">
        +
      </Button>
    </div>
  );
};

export default Index;
