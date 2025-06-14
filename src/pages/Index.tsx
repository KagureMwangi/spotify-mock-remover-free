
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import { Player } from "@/components/Player";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <SidebarProvider>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <MainContent 
            setCurrentSong={setCurrentSong} 
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            isPlaying={isPlaying}
          />
        </div>
        {currentSong && (
          <Player 
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )}
      </SidebarProvider>
    </div>
  );
};

export default Index;
