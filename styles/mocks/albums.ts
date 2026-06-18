export type Album = {
  cover: string;
};

export const metallicaAlbums: Album[] = [
  {
    cover:
      "https://cdn-images.dzcdn.net/images/cover/6d5f397660c6ec7a445f386edac05b9e/1900x1900-000000-80-0-0.jpg",
  },
  {
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrahNoLEe6pAV8Z07IGkdua9kOMeRghfQnag&s",
  },
  {
    cover: "https://i.ebayimg.com/images/g/6vcAAOSwXHpca1W1/s-l1200.jpg",
  },
];

export type Category = {
  name: string;
};

export const spotifyCategories: Category[] = [
  {
    name: "Trending Now",
  },
  {
    name: "Podcasts",
  },
  {
    name: "Made for You",
  },
  {
    name: "Charts",
  },
  {
    name: "New Releases",
  },
  {
    name: "Discover",
  },
  {
    name: "Mood",
  },
];

export type Playlist = {
  name: string;
  cover: string;
};

export const spotifyPlaylists: Playlist[] = [
  {
    name: "Punk",
    cover: "https://i.scdn.co/image/ab67616d5000b3b83b7bebd7b111a6d4dab6e1fd",
  },
];
