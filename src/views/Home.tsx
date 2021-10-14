import { useEffect } from 'react';
import { Button, Link, Spinner } from '@chakra-ui/react';
import { Center, Text } from '@chakra-ui/layout';
import { AtSignIcon } from '@chakra-ui/icons';
import { CardBox, MainBox } from 'styles/card';
import usePokemon from 'hooks/usePokemon';
import PokeCard from "components/PokeCard";
import { Scoreboard, ScoreboardElements, ScoreboardListItem } from 'styles/home';

const Home = () => {

    const { hits, loading, list, wins, load, addWin, cleanHits } = usePokemon();

    useEffect(() => {
        console.log('effect')
        if (hits.length === 18) {
            addWin();
            cleanHits();
            load();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hits]);

    if (loading)
        return (<Center h="100vh">
            <Spinner />
        </Center>);

    return (
        <Center flexDirection="column">
            <Scoreboard>
                <ScoreboardElements>
                    <ScoreboardListItem>
                        <Text color="white" marginRight="0.5rem">Choose duplicated cards</Text>
                        <Button colorScheme="linkedin" onClick={() => load()}>Change Cards</Button>
                    </ScoreboardListItem>
                    <ScoreboardListItem>
                        <Text color="white" marginRight="0.5rem"><b>Wins</b>: {wins}</Text>
                        <Text color="white"><b>Score</b>: {hits.length} hits</Text>
                    </ScoreboardListItem>
                </ScoreboardElements>
            </Scoreboard>
            {/* <Button colorScheme="green" onClick={()=> load()}>Change Cards</Button> */}
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
