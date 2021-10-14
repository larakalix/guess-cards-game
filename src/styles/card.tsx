import styled from '@emotion/styled';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { Text } from '@chakra-ui/layout';

export const MainBox = styled(Box)`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
`;

export const CardBox = styled(Grid)`
    background-color: #e75151;
    padding: 1.2rem;
    border-radius: 0.5rem;
    min-width: 70vw;
    max-height: 85vh;
`;

export const Card = styled(GridItem)`
    background-color: transparent;
    perspective: 1000px;

    &:hover .inner, .active {
        transform: rotateY(180deg);
    }
`;

export const CardInner = styled(Box)`
    border-radius: 0.5rem;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

export const CardFront = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    background-color: #6977e1;
    color: black;
    padding: 1rem;
`;

export const CardBack = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backface-visibility: hidden;
    background-color: #f7e466;
    color: white;
    transform: rotateY(180deg);
    overflow: hidden;
    padding: 1rem;

    &.active {
        background-color: #47ff63;
    }
`;

export const CartTitle = styled(Text)`
    font-size: 0.6rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #3e3a39;
`;

export const Badge = styled(Text)`
    position: absolute;
    top: 0.2rem;
    left: 0.4rem;
    font-weight: bold;
    font-size: 0.7rem;
    color: black;
`;
