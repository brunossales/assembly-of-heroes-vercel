import { Comic } from "../entities/Comic";
import { HeroEntity, HeroEntityAll } from "../entities/Hero";

export interface HeroGateway {
    findAll(): Promise<HeroEntityAll>;
    findById(id: Number): Promise<HeroEntity>;
    findComics(id: Number): Promise<Comic[]>;
    nameStartsWith(nameStartWith: string): Promise<HeroEntity[]>;
}