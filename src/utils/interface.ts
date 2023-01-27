interface Character {
    id: number;
    name: string;
    species: string;
    status: string;
    gender: string;
    image: string;
    location: {url: string, name: string};
    origin: {url: string, name:};
    episode: string[]
}

interface Info {
    pages: number;
    current: number;
}

export type {
    Character,
    Info
}