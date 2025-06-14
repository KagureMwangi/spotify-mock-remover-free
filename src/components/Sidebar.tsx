
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
    <div className="w-64 bg-black flex flex-col h-full border-r border-gray-800">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Spotify</h1>
        
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-white hover:text-white hover:bg-gray-800">
            <Home className="mr-3 h-5 w-5" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
            <Search className="mr-3 h-5 w-5" />
            Search
          </Button>
          <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
            <Library className="mr-3 h-5 w-5" />
            Your Library
          </Button>
        </nav>
      </div>

      <div className="px-6 py-4">
        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 mb-2">
          <Plus className="mr-3 h-4 w-4" />
          Create Playlist
        </Button>
        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800">
          <Heart className="mr-3 h-4 w-4" />
          Liked Songs
        </Button>
      </div>

      <div className="flex-1 px-6">
        <div className="border-t border-gray-800 pt-4">
          <ScrollArea className="h-full">
            <div className="space-y-1">
              {playlists.map((playlist, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800 text-sm"
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
