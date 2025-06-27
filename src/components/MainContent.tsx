import { useState } from "react";
import { Play, Pause } from "lucide-react";
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
    <div className="flex-1 bg-transparent relative">
      <ScrollArea className="h-full">
        <div className="px-6 sm:px-8 lg:px-12 pt-8 pb-6">
          {/* Header with better spacing */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-3 font-[PlayfairDisplay] tracking-tight lowercase leading-tight">
              good evening,
            </h1>
          </div>

          {/* Quick Access with improved responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {mockPlaylists.slice(0, 6).map((playlist) => (
              <div
                key={playlist.id}
                className="bg-white/10 dark:bg-white/5 light:bg-white/60 backdrop-blur-sm rounded-xl p-4 flex items-center hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-white/80 transition-all cursor-pointer group border border-white/20 dark:border-white/10 light:border-gray-200/60 shadow-lg hover:shadow-xl"
              >
                <img
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4 shadow-md"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 text-base truncate mb-1">{playlist.name}</h3>
                  <p className="text-gray-300 dark:text-gray-400 light:text-gray-600 text-sm truncate">{playlist.description}</p>
                </div>
                <Button
                  size="sm"
                  className="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-200 gradient-primary hover:scale-105 rounded-full w-12 h-12 p-0 shadow-lg"
                >
                  <Play className="w-4 h-4 text-white fill-white" />
                </Button>
              </div>
            ))}
          </div>

          {/* Recently Played with better spacing */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-6">Recently played</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
              {mockSongs.slice(0, 10).map((song) => (
                <div
                  key={song.id}
                  className="bg-white/10 dark:bg-white/5 light:bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-white/80 transition-all group border border-white/20 dark:border-white/10 light:border-gray-200/60 shadow-lg hover:shadow-xl flex flex-col"
                >
                  <div className="relative mb-4">
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-full aspect-square object-cover rounded-lg shadow-md"
                    />
                    <Button
                      onClick={() => handlePlaySong(song)}
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 gradient-primary hover:scale-105 rounded-full w-12 h-12 p-0 shadow-lg"
                    >
                      {currentSong?.id === song.id && isPlaying ? (
                        <Pause className="w-4 h-4 text-white" />
                      ) : (
                        <Play className="w-4 h-4 text-white fill-white" />
                      )}
                    </Button>
                  </div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 truncate text-sm sm:text-base mb-1">{song.title}</h3>
                  <p className="text-gray-300 dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm truncate">{song.artist}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Made for you with better spacing */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-6">Made for you</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6">
              {mockPlaylists.slice(0, 5).map((playlist) => (
                <div
                  key={playlist.id}
                  className="bg-white/10 dark:bg-white/5 light:bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-white/80 transition-all group border border-white/20 dark:border-white/10 light:border-gray-200/60 shadow-lg hover:shadow-xl flex flex-col"
                >
                  <div className="relative mb-4">
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-full aspect-square object-cover rounded-lg shadow-md"
                    />
                    <Button
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 gradient-primary hover:scale-105 rounded-full w-12 h-12 p-0 shadow-lg"
                    >
                      <Play className="w-4 h-4 text-white fill-white" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-900 truncate text-sm sm:text-base mb-1">{playlist.name}</h3>
                  <p className="text-gray-300 dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm truncate">{playlist.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}