import { Image } from '@chakra-ui/react';
import { Pokemon } from 'interfaces/pokemon';
import { Card, CardBack, CardFront, CardInner, CartTitle, Badge } from 'styles/card';
import pokeball from './../assets/images/pokeball.png';
import notfound from './../assets/images/notfound.png';
import usePokemon from 'hooks/usePokemon';

interface Props {
    pokemon: Pokemon;
}

const PokeCard = ({ pokemon }: Props) => {

    const { id, selector, name, picture } = pokemon;

    const { equals, hits, addEquals, cleanEquals, addHits } = usePokemon();

    const isSelected = (pokemon: Pokemon): boolean => {
        return equals.filter(e => e.selector === selector).length === 1;
    }

    const selected = (pokemon: Pokemon): boolean => {
        return equals.filter(e => e.id === id).length === 2 || hits.filter(e => e.id === id).length === 1;
    }

    const guess = (pokemon: Pokemon) => {

        // Validate if pokemon was hitted
        if (hits.filter(e => e.id === id).length > 0 || equals.filter(e => e.selector === selector).length > 0)
            return;

        // Validate if pokemon is prev selected
        if (equals.filter(e => e.id === id).length === 1) {
            addHits(pokemon);
            cleanEquals();
        }
        // Validate if pokemon is not prev selected
        else if (equals.filter(e => e.id === id).length === 0 && equals.length < 1)
            addEquals(pokemon);
        else {
            addEquals(pokemon);
            setTimeout(() => cleanEquals(), 500);
        }
    }

    return (
        <Card
            onClick={() => guess(pokemon)}>
            <CardInner
                className={`inner ${isSelected(pokemon) || selected(pokemon) ? 'active' : ''}`}
            >
                <CardFront>
                    <Image
                        w="50%"
                        h="95%"
                        borderRadius="0.5rem"
                        objectFit="cover"
                        src={pokeball} alt="Pokemon Card Guess Game" />
                </CardFront>
                <CardBack
                    className={`${isSelected(pokemon) || selected(pokemon) ? 'active' : ''}`}
                >
                    <Badge>#{id}</Badge>
                    <Image
                        boxSize="80px"
                        objectFit="cover"
                        src={picture}
                        alt={name}
                        fallbackSrc={notfound} />
                    <CartTitle>{name}</CartTitle>
                </CardBack>
            </CardInner>
        </Card>
    )
}

export default PokeCard;
