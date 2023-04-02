import { useMemo } from 'react';
import Link from 'next/link';

import { useRequest } from '../contexts/requests';

import CardHero from '../components/CardHero';
import { Input } from '../components/Input';
import PaginationComponent from '../components/PaginationComponent';

import { 
  CardsContainer, 
  ContainerLoading, 
  FontName, 
  Footer, 
  HomeContainer, 
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
