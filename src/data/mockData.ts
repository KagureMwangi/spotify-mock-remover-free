
export const mockSongs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 200,
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 2,
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: 174,
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 3,
    title: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: 203,
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 4,
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: 178,
    cover: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 5,
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    album: "Stay",
    duration: 141,
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 6,
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    duration: 238,
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 7,
    title: "Bad Habits",
    artist: "Ed Sheeran",
    album: "Bad Habits",
    duration: 231,
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 8,
    title: "Industry Baby",
    artist: "Lil Nas X & Jack Harlow",
    album: "MONTERO",
    duration: 212,
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 9,
    title: "Peaches",
    artist: "Justin Bieber ft. Daniel Caesar & Giveon",
    album: "Justice",
    duration: 198,
    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 10,
    title: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    album: "MONTERO",
    duration: 137,
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 11,
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: 242,
    cover: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 12,
    title: "positions",
    artist: "Ariana Grande",
    album: "Positions",
    duration: 172,
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop&crop=face"
  }
];

export const mockPlaylists = [
  {
    id: 1,
    name: "Today's Top Hits",
    description: "The biggest songs right now",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=face",
    songs: mockSongs.slice(0, 6)
  },
  {
    id: 2,
    name: "RapCaviar",
    description: "New and trending rap music",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&crop=face",
    songs: mockSongs.slice(3, 9)
  },
  {
    id: 3,
    name: "Pop Rising",
    description: "The new generation of pop superstars",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop&crop=face",
    songs: mockSongs.slice(1, 7)
  },
  {
    id: 4,
    name: "Chill Hits",
    description: "Kick back to the best new and recent chill hits",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    songs: mockSongs.slice(2, 8)
  },
  {
    id: 5,
    name: "Discover Weekly",
    description: "Your weekly mixtape of fresh music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop&crop=face",
    songs: mockSongs.slice(4, 10)
  },
  {
    id: 6,
    name: "Liked Songs",
    description: "Your favorite tracks",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&crop=face",
    songs: mockSongs.slice(0, 5)
  }
];
