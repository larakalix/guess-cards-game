import { createContext, useState } from 'react';
import { Props } from 'interfaces/generic';

export interface CardContextType {
    equals: string[];
    hits: string[];
    addEquals: (id: string) => void;
    cleanEquals: () => void;
    addHits: (id: string) => void;
}

const initState: CardContextType = {
    equals: [],
    hits: [],
    addEquals: (id: string) => {},
    cleanEquals: () => {},
    addHits: (id: string) => {},
}

export const CardContext = createContext<CardContextType>(initState);

const CartProvider = ({ children }: Props) => {

    const [equals, setEquals] = useState<string[]>([]);
    const [hits, setHits] = useState<string[]>([]);

    const addEquals = (id: string) => setEquals([...equals, id]);
    
    const cleanEquals = () => setEquals([]);
    
    const addHits = (id: string) => setHits([...hits, id]);
    
    return (
        <CardContext.Provider
            value={{
                equals,
                hits,
                addEquals,
                cleanEquals,
                addHits,
            }}
        >
            { children }
        </CardContext.Provider>
    )
}

export default CartProvider;
