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
    <Sidebar className="border-r border-white/10 dark:border-white/10 light:border-gray-200/50">
      <SidebarHeader className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text font-[PlayfairDisplay] tracking-tighter lowercase" style={{letterSpacing: '-1.5px'}}>
            vibes
          </h1>
          <ThemeToggle />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full justify-start text-white dark:text-white light:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100/80 py-3 px-4 rounded-lg">
                  <Home className="mr-3 h-5 w-5" />
                  <span className="text-base">Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full justify-start text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100/80 py-3 px-4 rounded-lg">
                  <Search className="mr-3 h-5 w-5" />
                  <span className="text-base">Search</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full justify-start text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100/80 py-3 px-4 rounded-lg">
                  <Library className="mr-3 h-5 w-5" />
                  <span className="text-base">Your Library</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-start text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100/80 py-3 px-4 rounded-lg">
                  <Plus className="mr-3 h-4 w-4" />
                  <span className="text-sm">Create Playlist</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="justify-start text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100/80 py-3 px-4 rounded-lg">
                  <Heart className="mr-3 h-4 w-4" />
                  <span className="text-sm">Liked Songs</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="flex-1 px-6 mt-6">
        <div className="border-t border-white/10 dark:border-white/10 light:border-gray-200/50 pt-6">
          <ScrollArea className="h-full">
            <SidebarMenu className="space-y-1">
              {playlists.map((playlist, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton className="w-full justify-start text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100/80 text-sm font-medium px-4 py-2 rounded-lg">
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