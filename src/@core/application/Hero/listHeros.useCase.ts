import { HeroEntityAll } from "../../domain/entities/Hero";
import { HeroGateway } from "../../domain/gateways/hero.gateway";

export type OrderBy= "name" | "modified" | "-name" | "-modified";

export class ListHeroUseCase {
  constructor(private heroGateway: HeroGateway) {}

  async execute(): Promise<HeroEntityAll> {
    return await this.heroGateway.findAll();
  }
}