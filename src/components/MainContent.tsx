
import { useState } from "react";
import { Play, Pause, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockSongs, mockPlaylists } from "@/data/mockData";

interface MainContentProps {
  setCurrentSong: (song: any) => void;
  setIsPlaying: (playing: boolean) => void;
  currentSong: any;
  isPlaying: boolean;
}

export function MainContent({ setCurrentSong, setIsPlaying, currentSong, isPlaying }: MainContentProps) {
  const [activeView, setActiveView] = useState("home");

  const handlePlaySong = (song: any) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black">
      <ScrollArea className="h-full">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Good evening</h1>
          </div>

          {/* Quick Access */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {mockPlaylists.slice(0, 6).map((playlist) => (
              <div
                key={playlist.id}
                className="bg-gray-800 bg-opacity-50 rounded-lg p-4 hover:bg-opacity-70 transition-all cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={playlist.image}
                    alt={playlist.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{playlist.name}</h3>
                    <p className="text-gray-400 text-sm">{playlist.description}</p>
                  </div>
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity bg-green-500 hover:bg-green-400 rounded-full w-12 h-12 p-0"
                  >
                    <Play className="w-5 h-5 text-black fill-black" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Recently Played */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Recently played</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {mockSongs.slice(0, 10).map((song) => (
                <div
                  key={song.id}
                  className="bg-gray-800 bg-opacity-30 p-4 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer group"
                >
                  <div className="relative mb-4">
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Button
                      onClick={() => handlePlaySong(song)}
                      className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-green-500 hover:bg-green-400 rounded-full w-12 h-12 p-0 transform translate-y-2 group-hover:translate-y-0"
                    >
                      {currentSong?.id === song.id && isPlaying ? (
                        <Pause className="w-5 h-5 text-black" />
                      ) : (
                        <Play className="w-5 h-5 text-black fill-black" />
                      )}
                    </Button>
                  </div>
                  <h3 className="font-semibold text-white truncate">{song.title}</h3>
                  <p className="text-gray-400 text-sm truncate">{song.artist}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Made for you */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Made for you</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {mockPlaylists.slice(0, 5).map((playlist) => (
                <div
                  key={playlist.id}
                  className="bg-gray-800 bg-opacity-30 p-4 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer group"
                >
                  <div className="relative mb-4">
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Button
                      className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-green-500 hover:bg-green-400 rounded-full w-12 h-12 p-0 transform translate-y-2 group-hover:translate-y-0"
                    >
                      <Play className="w-5 h-5 text-black fill-black" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-white truncate">{playlist.name}</h3>
                  <p className="text-gray-400 text-sm truncate">{playlist.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}
