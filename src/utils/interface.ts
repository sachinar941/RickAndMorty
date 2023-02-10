interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
  location: {url: string; name: string};
  origin: {url: string; name: string};
  episode: string[];
}

interface Info {
  pages: number;
  current: number;
}

interface Profile {
  id: number;
  edisodes: [];
}

export type {Character, Info, Profile};
