import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface PlayerProps {
  currentSong: any;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export function Player({ currentSong, isPlaying, setIsPlaying }: PlayerProps) {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (currentSong) {
      setDuration(currentSong.duration);
      setCurrentTime(0);
      setProgress(0);
    }
  }, [currentSong]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentSong) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 1;
          setProgress((newTime / duration) * 100);
          if (newTime >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong, duration, setIsPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (value: number[]) => {
    const newTime = (value[0] / 100) * duration;
    setCurrentTime(newTime);
    setProgress(value[0]);
  };

  if (!currentSong) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-20 sm:h-24 bg-black/40 dark:bg-black/60 light:bg-white/80 backdrop-blur-xl border-t border-white/20 dark:border-white/10 light:border-gray-200/60 flex items-center justify-between px-4 sm:px-8 lg:px-12">
      {/* Navigation Arrows */}
      <div className="hidden sm:flex items-center space-x-2">
        <Button size="icon" variant="ghost" className="text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button size="icon" variant="ghost" className="text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900">
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Current Song Info */}
      <div className="flex items-center space-x-3 w-1/4 min-w-0">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover shadow-md"
        />
        <div className="min-w-0 hidden sm:block">
          <h4 className="text-white dark:text-white light:text-gray-900 font-semibold truncate text-sm sm:text-base">{currentSong.title}</h4>
          <p className="text-gray-300 dark:text-gray-400 light:text-gray-600 text-xs sm:text-sm truncate">{currentSong.artist}</p>
        </div>
        <Button size="sm" variant="ghost" className="hidden sm:flex text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center w-2/4 max-w-2xl">
        <div className="flex items-center space-x-2 sm:space-x-4 mb-2">
          <Button size="icon" variant="ghost" className="hidden sm:flex text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900">
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900">
            <SkipBack className="w-5 h-5" />
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="gradient-primary hover:scale-105 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 shadow-lg transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
            )}
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900">
            <SkipForward className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="hidden sm:flex text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900">
            <Repeat className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2 w-full max-w-md">
          <span className="text-xs text-gray-300 dark:text-gray-400 light:text-gray-600 w-10 text-right hidden sm:block">
            {formatTime(currentTime)}
          </span>
          <Slider
            value={[progress]}
            onValueChange={handleProgressChange}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-gray-300 dark:text-gray-400 light:text-gray-600 w-10 hidden sm:block">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="hidden lg:flex items-center space-x-2 w-1/4 min-w-0 justify-end">
        <Volume2 className="w-4 h-4 text-gray-300 dark:text-gray-400 light:text-gray-600" />
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="w-20"
        />
      </div>
    </div>
  );
}