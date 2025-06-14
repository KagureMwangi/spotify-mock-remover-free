
import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Heart } from "lucide-react";
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
    <div className="h-20 bg-gradient-to-t from-black/70 to-black border-t border-gray-900 flex items-center justify-between px-8 sm:px-12">
      {/* Current Song Info */}
      <div className="flex items-center space-x-3 w-1/4 min-w-0">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="min-w-0">
          <h4 className="text-white font-semibold truncate text-base">{currentSong.title}</h4>
          <p className="text-gray-400 text-xs truncate">{currentSong.artist}</p>
        </div>
        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center w-2/4 max-w-2xl">
        <div className="flex items-center space-x-3 mb-1">
          <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
            <SkipBack className="w-5 h-5" />
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white hover:bg-gray-200 text-black rounded-full w-8 h-8 p-0"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 fill-black" />
            )}
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
            <SkipForward className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
            <Repeat className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2 w-full">
          <span className="text-xs text-gray-400 w-10 text-right hidden sm:block">
            {formatTime(currentTime)}
          </span>
          <Slider
            value={[progress]}
            onValueChange={handleProgressChange}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-gray-400 w-10 hidden sm:block">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2 w-1/4 min-w-0 justify-end">
        <Volume2 className="w-4 h-4 text-gray-400" />
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
