import { Image } from '@chakra-ui/react';
import { Pokemon } from 'interfaces/pokemon';
import { Card, CardBack, CardFront, CardInner, CartTitle, Badge } from 'styles/card';
import pokeball from './../assets/images/pokeball.png';
import notfound from './../assets/images/notfound.png';
import usePokemon from 'hooks/usePokemon';

interface Props {
    pokemon: Pokemon;
}

const PokeCard = ({ pokemon: { id, selector, name, picture } }: Props) => {

    const { equals, hits, addEquals, cleanEquals, addHits } = usePokemon();
    // const [active, setActive] = useState(false);

    const isActive = (selector: string): boolean => {
        return equals.filter(e => e === selector).length === 2;
    }

    const selected = (selector: string): boolean => {
        return equals.filter(e => e === selector).length === 1;
    }

    const guess = (selector: string) => {
        // setActive(true);

        // Validate if pokemon was hitted
        if (hits.filter(e => e === selector).length > 0) {
            console.clear();
            console.log('Pokemon was already hitted');
            return;
        }

        // Validate if pokemon is prev selected
        if (equals.filter(e => e === selector).length === 1) {
            addHits(selector);
            cleanEquals();
            
            console.clear();
            console.log('Pokemon HIT!!');
        }
        // Validate if pokemon is not prev selected
        else if (equals.filter(e => e === selector).length === 0) {
            console.clear();
            console.log('First Pokemon hit');
            console.log('Equals length', equals.length);
            addEquals(selector);
            if (equals.length === 1) {
                console.log('Clean Equals');
                cleanEquals();
                // setActive(false);
            }
        }
    }

    return (
        <Card
            onClick={() => guess(selector)}>
            <CardInner
                className={`inner ${isActive(selector) || selected(selector) ? 'active' : ''}`}
            >
                <CardFront>
                    <Image
                        boxSize="50%"
                        borderRadius="0.5rem"
                        objectFit="cover"
                        src={pokeball} alt="Pokemon Card Guess Game" />
                </CardFront>
                <CardBack
                    className={`${selected(selector) ? 'active' : ''}`}
                >
                    <Badge>#{id}</Badge>
                    <Image
                        boxSize="80px"
                        objectFit="cover"
                        src={picture}
                        alt={name}
                        fallbackSrc={notfound} />
                    <CartTitle>{name}</CartTitle>
                    <CartTitle>{selector}</CartTitle>
                </CardBack>
            </CardInner>
        </Card>
    )
}

export default PokeCard;
