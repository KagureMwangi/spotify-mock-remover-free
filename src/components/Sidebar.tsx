
import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const playlists = [
  "Liked Songs",
  "My Playlist #1",
  "Discover Weekly",
  "Release Radar",
  "Chill Vibes",
  "Workout Mix",
  "Road Trip Songs",
  "Study Focus"
];

export function Sidebar() {
  return (
    <div className="w-60 bg-sidebar flex flex-col h-full border-r border-sidebar-border">
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-bold text-white mb-6 font-[PlayfairDisplay] tracking-tighter lowercase" style={{letterSpacing: '-1.5px'}}>
          vibes
        </h1>
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-sidebar-accent/60">
            <Home className="mr-2 h-5 w-5" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-sidebar-accent/60">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-sidebar-accent/60">
            <Library className="mr-2 h-5 w-5" />
            Your Library
          </Button>
        </nav>
      </div>

      <div className="px-4 pb-2 flex flex-col gap-1">
        <Button variant="ghost" className="justify-start text-gray-400 hover:text-white hover:bg-sidebar-accent/60 text-sm">
          <Plus className="mr-2 h-4 w-4" />
          Create Playlist
        </Button>
        <Button variant="ghost" className="justify-start text-gray-400 hover:text-white hover:bg-sidebar-accent/60 text-sm">
          <Heart className="mr-2 h-4 w-4" />
          Liked Songs
        </Button>
      </div>

      <div className="flex-1 px-3 mt-3">
        <div className="border-t border-sidebar-border pt-3">
          <ScrollArea className="h-full">
            <div className="space-y-1">
              {playlists.map((playlist, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-gray-400 hover:text-white hover:bg-sidebar-accent/50 text-xs font-medium px-2 py-1 rounded-lg"
                >
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
