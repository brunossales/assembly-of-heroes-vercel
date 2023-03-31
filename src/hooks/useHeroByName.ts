import { useQuery } from "react-query";
import { FactoryMakeByNameUseCase } from "../@core/factory/factoryListByName/FactoryMakeListByNameUseCase";


//query.id no array de dependência para o caso de quando nesse componente com um id diferente
//a requisição será refeita
export const useHeroByName = (nameStartWith: string) => {
    const { isLoading, error, data } = useQuery(['queryName', nameStartWith], async () => {
        if (nameStartWith.length === 0) return [];
        return FactoryMakeByNameUseCase().execute(nameStartWith);
    });

    return {
        isLoading,
        error,
        data
    }
}