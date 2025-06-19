
import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

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

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-white/10 dark:border-white/10 light:border-orange-200/30">
      <SidebarHeader className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold gradient-text font-[PlayfairDisplay] tracking-tighter lowercase" style={{letterSpacing: '-1.5px'}}>
            vibes
          </h1>
          <ThemeToggle />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full justify-start text-white dark:text-white light:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-orange-100/50">
                  <Home className="mr-2 h-5 w-5" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full justify-start text-gray-300 dark:text-gray-400 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-orange-100/50">
                  <Search className="mr-2 h-5 w-5" />
                  <span>Search</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full justify-start text-gray-300 dark:text-gray-400 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-orange-100/50">
                  <Library className="mr-2 h-5 w-5" />
                  <span>Your Library</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-start text-gray-300 dark:text-gray-400 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-orange-100/50 text-sm">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Create Playlist</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-start text-gray-300 dark:text-gray-400 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-orange-100/50 text-sm">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Liked Songs</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="flex-1 px-3 mt-3">
        <div className="border-t border-white/10 dark:border-white/10 light:border-orange-200/30 pt-3">
          <ScrollArea className="h-full">
            <SidebarMenu className="space-y-1">
              {playlists.map((playlist, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton className="w-full justify-start text-gray-300 dark:text-gray-400 light:text-gray-700 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-orange-100/50 text-xs font-medium px-2 py-1 rounded-lg">
                    {playlist}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </ScrollArea>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
