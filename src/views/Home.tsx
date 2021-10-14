import { Button, Link, Spinner } from '@chakra-ui/react';
import { Center, Text } from '@chakra-ui/layout';
import { AtSignIcon } from '@chakra-ui/icons';
import { CardBox, MainBox } from 'styles/card';
import usePokemon from 'hooks/usePokemon';
import PokeCard from "components/PokeCard";

const Home = () => {

    const { equals, hits, loading, list, load } = usePokemon();

    if (loading)
        return (<Center h="100vh">
            <Spinner />
        </Center>)

    return (
        <Center flexDirection="column">
            <Text marginTop="1.7rem">Choose duplicated cards</Text>
            <Button colorScheme="green" onClick={()=> load()}>Change Cards</Button>
            <Text>Equals: { equals.length > 0 ? equals : '0' }</Text>
            <Text>Hits: { hits.length > 0 ? hits : '0' }</Text>
            <hr />
            <MainBox>
                <CardBox templateColumns="repeat(6, 1fr)" gap={4}>
                    {
                        list.map((item, index) => (
                            <PokeCard key={`${item.id}${index}`} pokemon={item} />
                        ))
                    }
                </CardBox>
            </MainBox>
            <Link padding="5" href="https://kalixthedev.netlify.app/" target="_blank">Made by <AtSignIcon /> Ivan Lara</Link>
        </Center>
    )
}

export default Home;
