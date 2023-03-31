import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

import { useRequest } from '../contexts/requests';
import { useHeroByName } from '../hooks/useHeroByName';

import CardHero from '../components/CardHero';
import { Input } from '../components/Input';

import { 
  Button, 
  CardsContainer, 
  ContainerLoading, 
  HomeContainer, 
  PaginationContainer 
} from '@/styles/pages/home'
import { QueryClient } from 'react-query';


function Home() {
  const [stringPattern, setStringPattern] = useState('');

  //usando meu contexto e hook criado por mim
  const { isLoading, data, offset, handleSetOffset } = useRequest();
  const { data: dataName, isLoading: isLoadingName } = useHeroByName(stringPattern);

  const resultData = useMemo(() => {
    if(!data || !dataName) return [];
    else if (stringPattern.length > 0) return dataName;
    return data?.results.map((item) => item)
  }, [data, stringPattern, dataName]);
  // console.log(data);

  function setHandleText(event: string){
    setStringPattern(event)
  }
  
  return (
    <>
      {( isLoading || isLoadingName ) ? <ContainerLoading>Loading...</ContainerLoading>
      : <HomeContainer>
        <PaginationContainer>
          {/* Paginação simples e prática usando o offset para a API 
              Em uma refatoração pode-se fazer um calculo para obter o numero maximo de botões 
              com base no número de herois
          */}
          <Button focus={offset === 0} onClick={() => handleSetOffset(0)}>1</Button>
          <Button focus={offset === 13} onClick={() => handleSetOffset(13)}>2</Button>
          <Button focus={offset === 23} onClick={() => handleSetOffset(23)}>3</Button>
          <Button focus={offset === 33} onClick={() => handleSetOffset(33)}>4</Button>
          <Button focus={offset === 43} onClick={() => handleSetOffset(43)}>5</Button>
          <Button focus={offset === 53} onClick={() => handleSetOffset(53)}>6</Button>
        </PaginationContainer>
        <Input placeholder='Search by name' value={stringPattern} autoFocus={stringPattern.length > 0} onChange={(event) => setHandleText(event.target.value)}/>
        <CardsContainer>
          {resultData.map((hero) => (
            <Link
              key={hero.id}
              href={`/comic/${hero.id}`}
              style={{ textDecoration: 'none' }}
            >
              <CardHero
                name={hero.name}
                thumbnail={hero.thumbnail}
              />
            </Link>
          ))}
        </CardsContainer>
      </HomeContainer>}
    </>
  )
}

export default Home;
