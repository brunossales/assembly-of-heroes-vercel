import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

import { useRequest } from '../contexts/requests';

import CardHero from '../components/CardHero';
import { Input } from '../components/Input';
import PaginationComponent from '../components/PaginationComponent';

import { 
  Button, 
  CardsContainer, 
  ContainerLoading, 
  FontName, 
  Footer, 
  HomeContainer, 
  PaginationContainer 
} from '@/styles/pages/home'


function Home() {
  //usando meu contexto e hook criado por mim
  const { isLoading, data, offset, handleSetOffset, dataWithName, handleSetStringPattern, stringPattern } = useRequest();

  const resultData = useMemo(() => {
    if(!data || !dataWithName) return [];
    else if (stringPattern.length > 0) return dataWithName;
    return data?.results.map((item) => item)
  }, [data, stringPattern, dataWithName]);
  
  return (
    <>
      {( isLoading ) ? <ContainerLoading>Loading...</ContainerLoading>
      : <HomeContainer>
        <PaginationComponent numHeros={data?.total} handleSetOffset={handleSetOffset} offset={offset} />
        {/* <PaginationContainer> */}
          {/* Paginação simples e prática usando o offset para a API 
              Em uma refatoração pode-se fazer um calculo para obter o numero maximo de botões 
              com base no número de herois
          */}
          {/* <Button focus={offset === 0} onClick={() => handleSetOffset(0)}>1</Button>
          <Button focus={offset === 13} onClick={() => handleSetOffset(13)}>2</Button>
          <Button focus={offset === 23} onClick={() => handleSetOffset(23)}>3</Button>
          <Button focus={offset === 33} onClick={() => handleSetOffset(33)}>4</Button>
          <Button focus={offset === 43} onClick={() => handleSetOffset(43)}>5</Button>
          <Button focus={offset === 53} onClick={() => handleSetOffset(53)}>6</Button>
        </PaginationContainer> */}
        <Input placeholder='Search by name' value={stringPattern} onChange={(event) => handleSetStringPattern(event.target.value)}/>
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
        <Footer>
          <h2>{data?.total} Heroes 🦹‍♂️</h2>
          <Link href="https://www.linkedin.com/in/bruno-sales-3a5856202/" target='_blank'>
            <FontName>Created By Bruno Sales 🔗</FontName>
          </Link> 
        </Footer>
      </HomeContainer>}
    </>
  )
}

export default Home;
