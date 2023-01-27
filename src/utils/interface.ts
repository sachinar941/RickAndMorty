interface Character {
    id: number;
    name: string;
    species: string;
    status: string;
    image: string;
}

interface Info {
    pages: number;
    current: number;
}

export type {
    Character,
    Info
}