import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      variant="ghost"
      className="text-white/70 hover:text-white hover:bg-white/10 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10 light:text-gray-600 light:hover:text-gray-900 light:hover:bg-gray-100/80 transition-all rounded-lg"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </Button>
  );
}