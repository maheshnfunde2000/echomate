
import React from "react";
import { cn } from "@/lib/utils";
import { Home, Cloud, MessageSquare, Users, Mic } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavigationItem = ({ icon, label, href, isActive }: NavigationItemProps) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex flex-col items-center gap-1 px-4 py-3 rounded-2xl transition-all duration-300",
        isActive 
          ? "bg-gradient-to-r from-cloud-purple to-cloud-blue text-white shadow-glow" 
          : "hover:bg-white hover:bg-opacity-70"
      )}
    >
      <div className={cn("transition-transform", isActive ? "scale-110" : "")}>
        {icon}
      </div>
      <span className="text-xs font-quicksand font-medium">{label}</span>
    </Link>
  );
};

const Navigation = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-cloud border border-cloud-blue border-opacity-20 animate-fade-in">
      <div className="flex items-center gap-1">
        <NavigationItem 
          icon={<Home className="h-5 w-5" />} 
          label="Home"
          href="/"
          isActive={location.pathname === "/"}
        />
        <NavigationItem 
          icon={<Cloud className="h-5 w-5" />} 
          label="Echoes"
          href="/echoes"
          isActive={location.pathname === "/echoes"}
        />
        <NavigationItem 
          icon={<MessageSquare className="h-5 w-5" />} 
          label="Chats"
          href="/chats"
          isActive={location.pathname === "/chats"}
        />
        <NavigationItem 
          icon={<Users className="h-5 w-5" />} 
          label="Clusters"
          href="/clusters"
          isActive={location.pathname === "/clusters"}
        />
        <NavigationItem 
          icon={<Mic className="h-5 w-5" />} 
          label="Streams"
          href="/streams"
          isActive={location.pathname === "/streams"}
        />
      </div>
    </div>
  );
};

export default Navigation;
