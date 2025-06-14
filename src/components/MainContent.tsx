
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
        <div className="px-7 pt-7 pb-4">
          {/* Header */}
          <div className="mb-7">
            <h1 className="text-4xl font-bold gradient-text mb-2 font-[PlayfairDisplay] tracking-tight lowercase leading-tight">
              good evening,
            </h1>
          </div>

          {/* Quick Access */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {mockPlaylists.slice(0, 6).map((playlist) => (
              <div
                key={playlist.id}
                className="bg-white/10 dark:bg-white/5 light:bg-white/40 backdrop-blur-sm rounded-xl p-3 flex items-center hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-white/60 transition-all cursor-pointer group border border-white/20 dark:border-white/10 light:border-orange-200/50 shadow-lg"
              >
                <img
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-14 h-14 rounded-md object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-800 text-base truncate">{playlist.name}</h3>
                  <p className="text-gray-300 dark:text-gray-400 light:text-gray-600 text-xs truncate">{playlist.description}</p>
                </div>
                <Button
                  size="sm"
                  className="ml-2 opacity-0 group-hover:opacity-100 transition gradient-primary hover:scale-105 rounded-full w-10 h-10 p-0 shadow-lg"
                >
                  <Play className="w-4 h-4 text-white fill-white" />
                </Button>
              </div>
            ))}
          </div>

          {/* Recently Played */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white dark:text-white light:text-gray-800 mb-3">Recently played</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {mockSongs.slice(0, 10).map((song) => (
                <div
                  key={song.id}
                  className="bg-white/10 dark:bg-white/5 light:bg-white/40 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-white/60 transition-all group border border-white/20 dark:border-white/10 light:border-orange-200/50 shadow-lg flex flex-col"
                >
                  <div className="relative mb-3">
                    <img
                      src={song.cover}
                      alt={song.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Button
                      onClick={() => handlePlaySong(song)}
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition gradient-primary hover:scale-105 rounded-full w-10 h-10 p-0 shadow-lg"
                    >
                      {currentSong?.id === song.id && isPlaying ? (
                        <Pause className="w-4 h-4 text-white" />
                      ) : (
                        <Play className="w-4 h-4 text-white fill-white" />
                      )}
                    </Button>
                  </div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-800 truncate text-base">{song.title}</h3>
                  <p className="text-gray-300 dark:text-gray-400 light:text-gray-600 text-xs truncate">{song.artist}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Made for you */}
          <section className="mb-4">
            <h2 className="text-xl font-semibold text-white dark:text-white light:text-gray-800 mb-3">Made for you</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
              {mockPlaylists.slice(0, 5).map((playlist) => (
                <div
                  key={playlist.id}
                  className="bg-white/10 dark:bg-white/5 light:bg-white/40 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-white/60 transition-all group border border-white/20 dark:border-white/10 light:border-orange-200/50 shadow-lg flex flex-col"
                >
                  <div className="relative mb-3">
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <Button
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition gradient-primary hover:scale-105 rounded-full w-10 h-10 p-0 shadow-lg"
                    >
                      <Play className="w-4 h-4 text-white fill-white" />
                    </Button>
                  </div>
                  <h3 className="font-semibold text-white dark:text-white light:text-gray-800 truncate text-base">{playlist.name}</h3>
                  <p className="text-gray-300 dark:text-gray-400 light:text-gray-600 text-xs truncate">{playlist.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}
