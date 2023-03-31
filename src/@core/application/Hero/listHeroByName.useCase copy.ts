import { HeroEntity } from "../../domain/entities/Hero";
import { HeroGateway } from "../../domain/gateways/hero.gateway";

export class ListHeroByNameUseCase {
  constructor(private heroGateway: HeroGateway) {}

  async execute(nameStartWith: string): Promise<HeroEntity[]> {
    return await this.heroGateway.nameStartsWith(nameStartWith);
  }
}