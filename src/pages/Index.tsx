
import { useState } from "react";
import { AppSidebar } from "@/components/Sidebar";
import { MainContent } from "@/components/MainContent";
import { Player } from "@/components/Player";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black light:from-orange-50 light:via-purple-50 light:to-orange-50 text-white dark:text-white light:text-gray-900">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset className="flex flex-col flex-1 overflow-hidden">
            <div className="md:hidden p-4 border-b border-white/10 dark:border-white/10 light:border-orange-200/30">
              <SidebarTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SidebarTrigger>
            </div>
            <div className="flex-1 overflow-hidden">
              <MainContent 
                setCurrentSong={setCurrentSong} 
                setIsPlaying={setIsPlaying}
                currentSong={currentSong}
                isPlaying={isPlaying}
              />
            </div>
          </SidebarInset>
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
