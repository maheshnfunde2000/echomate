
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Snippet } from "@/data/snippets";
import { Button } from "@/components/ui/button";

interface SnippetCardProps {
  snippet: Snippet;
}

const SnippetCard = ({ snippet }: SnippetCardProps) => {
  const formattedTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const getMoodGradient = (mood?: string) => {
    switch (mood) {
      case "serene":
        return "bg-gradient-serene";
      case "playful":
        return "bg-gradient-playful";
      default:
        return "bg-gradient-pastel";
    }
  };

  return (
    <Card className={cn(
      "cloud-card border-none overflow-hidden animate-fade-in shadow-md transition-all duration-300",
      "hover:shadow-cloud-hover hover:translate-y-[-2px]"
    )}>
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center space-x-3">
          <Avatar className={cn("h-10 w-10", 
            snippet.creatorAvatar ? "" : getMoodGradient(snippet.mood))}>
            {snippet.creatorAvatar ? (
              <img 
                src={snippet.creatorAvatar} 
                alt={snippet.creatorName}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-white font-medium text-lg">
                {snippet.creatorName.charAt(0)}
              </span>
            )}
          </Avatar>
          <div>
            <h3 className="font-quicksand font-medium text-base">{snippet.creatorName}</h3>
            <p className="text-muted-foreground text-xs">{formattedTime(snippet.createdAt)}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-base mb-3">{snippet.content}</p>
        {snippet.media && (
          <div className="relative rounded-xl overflow-hidden mb-2">
            <img 
              src={snippet.media}
              alt="Snippet media"
              className="w-full object-cover max-h-72 rounded-xl"
            />
            {snippet.filter && (
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs text-white font-quicksand">{snippet.filter}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex items-center gap-5">
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground hover:text-cloud-purple">
            <Heart className="h-4 w-4" /> 
            <span className="text-sm">{snippet.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground hover:text-cloud-blue">
            <MessageSquare className="h-4 w-4" /> 
            <span className="text-sm">{snippet.comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-cloud-pink">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SnippetCard;
