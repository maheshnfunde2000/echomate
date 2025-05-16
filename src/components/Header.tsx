
import React from "react";
import ProfileMenu from "./ProfileMenu";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-background/70 backdrop-blur-lg border-b border-border py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <h1 className="text-2xl font-quicksand font-bold gradient-text">Echomate<span className="text-cloud-blue">Lite</span></h1>
          </div>
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search echoes..." 
              className="pl-10 rounded-full bg-white pr-4 w-64 font-quicksand" 
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="relative h-10 w-10 rounded-full bg-cloud-blue bg-opacity-20 transition-all duration-300 hover:bg-opacity-30"
          >
            <Bell className="h-5 w-5 text-cloud-blue" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-cloud-pink animate-pulse-soft"></span>
          </Button>
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
