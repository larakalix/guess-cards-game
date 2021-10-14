import { createContext, useState } from 'react';
import { Props } from 'interfaces/generic';
import { Pokemon } from 'interfaces/pokemon';

export interface CardContextType {
    equals: Pokemon[];
    hits: Pokemon[];
    wins: number;
    addEquals: (pokemon: Pokemon) => void;
    cleanEquals: () => void;
    cleanHits: () => void;
    addHits: (pokemon: Pokemon) => void;
    addWin: () => void;
}

const initState: CardContextType = {
    equals: [],
    hits: [],
    wins: 0,
    addEquals: (pokemon: Pokemon) => { },
    cleanEquals: () => { },
    cleanHits: () => { },
    addHits: (pokemon: Pokemon) => { },
    addWin: () => { },
}

export const CardContext = createContext<CardContextType>(initState);

const CartProvider = ({ children }: Props) => {

    const [equals, setEquals] = useState<Pokemon[]>(initState.equals);
    const [hits, setHits] = useState<Pokemon[]>(initState.hits);
    const [wins, setWins] = useState<number>(initState.wins);

    const addEquals = (pokemon: Pokemon) => setEquals([...equals, pokemon]);

    const cleanEquals = () => setEquals(initState.equals);

    const addHits = (pokemon: Pokemon) => setHits([...hits, pokemon]);

    const addWin = () => setWins(wins + 1);

    const cleanHits = () => setHits(initState.hits);

    return (
        <CardContext.Provider
            value={{
                equals,
                hits,
                wins,
                addEquals,
                cleanEquals,
                cleanHits,
                addHits,
                addWin,
            }}
        >
            {children}
        </CardContext.Provider>
    )
}

export default CartProvider;
