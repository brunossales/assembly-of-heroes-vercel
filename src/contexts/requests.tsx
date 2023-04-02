import { 
    createContext,
    useContext, 
    ReactNode, 
    useState,
    useCallback
} from "react";
import { useQuery } from "react-query";

import { HeroEntity, HeroEntityAll } from "../@core/domain/entities/Hero";
import { FactoryMakeListUseCase } from "../@core/factory/factoryListAll/FactoryMakeListHeroUseCase";
import { FactoryMakeByNameUseCase } from "../@core/factory/factoryListByName/FactoryMakeListByNameUseCase";

interface RequestContextData {
    offset: number;
    stringPattern: string;
    handleSetOffset: (value: number) => void;
    handleSetStringPattern: (value: string) => void;
    error: any;
    isLoading: boolean;
    data: HeroEntityAll | undefined;
    dataWithName: HeroEntity[] | undefined;
}

interface RequestProviderProps {
    children: ReactNode;
}

const RequestContext = createContext<RequestContextData>({} as RequestContextData);

function RequestProvider({ children }: RequestProviderProps) {
    const [offset, setOffSet] = useState(0);
    const [stringPattern, setStringPattern] = useState('');

    //offset como array de dependência para quando o estado mudar a função rodar novamente
    const { isLoading, error, data } = useQuery(['query', offset], async () => {
        return FactoryMakeListUseCase(offset).execute();
    });

    const { data: dataWithName } = useQuery(['queryName', stringPattern, offset], async () => {
        if (stringPattern.length === 0) return [];
        return FactoryMakeByNameUseCase(offset).execute(stringPattern);
    });

    const handleSetOffset = useCallback((value: number) => {
        setOffSet(value);
    }, [])

    const handleSetStringPattern = useCallback((value: string) => {
        setStringPattern(value);
    }, [])

    return <RequestContext.Provider value={{
        data,
        error,
        isLoading,
        offset,
        handleSetOffset,
        dataWithName,
        handleSetStringPattern,
        stringPattern
    }}>
        {children}
    </RequestContext.Provider>
}

//Criando o meu hook de request
function useRequest(): RequestContextData {
    const context = useContext(RequestContext)
    return context;
}

export { RequestProvider, useRequest }