
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cloud, User, Settings, LogOut, MessageSquare, Users } from "lucide-react";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="relative h-10 w-10 rounded-full bg-cloud-purple bg-opacity-20 transition-all duration-300 hover:bg-opacity-30"
        >
          <div className="flex items-center justify-center">
            <User className="h-5 w-5 text-cloud-purple" />
          </div>
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-cloud-pink animate-pulse-soft"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 cloud-card border-none"
        sideOffset={5}
      >
        <div className="flex flex-col items-center py-4">
          <div className="h-16 w-16 rounded-full bg-gradient-pastel flex items-center justify-center mb-2 shadow-glow">
            <User className="h-8 w-8 text-white" />
          </div>
          <DropdownMenuLabel className="font-quicksand text-lg">Cloud Whisper</DropdownMenuLabel>
          <p className="text-sm text-muted-foreground">@cloudwhisper</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2 py-2 my-1 cursor-pointer font-quicksand">
          <Cloud className="h-4 w-4" /> My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 py-2 my-1 cursor-pointer font-quicksand">
          <MessageSquare className="h-4 w-4" /> Messages
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 py-2 my-1 cursor-pointer font-quicksand">
          <Users className="h-4 w-4" /> Echo Clusters
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 py-2 my-1 cursor-pointer font-quicksand">
          <Settings className="h-4 w-4" /> Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2 py-2 my-1 cursor-pointer text-destructive font-quicksand">
          <LogOut className="h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
