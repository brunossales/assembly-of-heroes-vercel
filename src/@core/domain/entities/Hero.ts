import { Comic } from "./Comic";

export type Thumbnail = {
    path: string;
    extension: string;
};

export type Comics = {
    available: number;
    returned: number;
    items: [
        {
            resourceURI: string;
            name: string;
        }
    ];
}

export type HeroEntity = {
    id: number;
    name: string;
    description: string;
    resourceURI: string;
    thumbnail: Thumbnail;
    comics: Comics;
}

export type HeroEntityAll = {
    total: number;
    results: {
        id: number;
        name: string;
        description: string;
        resourceURI: string;
        thumbnail: Thumbnail;
        comics: Comics;
    }[];

}