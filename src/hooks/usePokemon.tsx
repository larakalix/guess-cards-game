import { useContext, useEffect, useRef, useState } from 'react';
import { pokemonApi } from 'api/api';
import { Pokemon, PokemonResponse, Result } from 'interfaces/pokemon';
import { suffleArray } from 'helpers/helpers';
import { CardContext } from 'context/CardContext';
import { v4 as uuidv4 } from 'uuid';

const usePokemon = () => {

    const { equals, hits, addEquals, cleanEquals, addHits } = useContext(CardContext);

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState<Pokemon[]>([]);
    const url = useRef('https://pokeapi.co/api/v2/pokemon?limit=72');

    const load = async () => {
        setLoading(true);
        setList([]);
        const response = await pokemonApi.get<PokemonResponse>(url.current);
        url.current = response.data.next;
        mapList(response.data.results);
    }

    const mapList = (list: Result[]) => {
        const pokemons: Pokemon[] = list.map(({ name, url }) => {

            const urlParts: string[] = url.split('/');
            const id: string = urlParts[urlParts.length - 2];
            const picture: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            const selector = '';

            return { id, selector, picture, name };
        });

        const shuffled = pokemons.sort(() => .5 - Math.random());

        let suffle = [
            ...suffleArray<Pokemon>(shuffled.slice(0, 18)),
            ...suffleArray<Pokemon>(shuffled.slice(0, 18))
        ];

        suffle = suffle.map((pokemon) => { return { ...pokemon, selector: uuidv4() } });

        setList(suffle);
        setLoading(false);
    }

    useEffect(() => {
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        equals,
        hits,
        loading,
        list,
        load,
        addEquals,
        cleanEquals,
        addHits,
    }
}

export default usePokemon;
