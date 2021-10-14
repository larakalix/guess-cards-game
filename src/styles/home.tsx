import styled from '@emotion/styled';
import { Box, List, ListItem } from '@chakra-ui/react';

export const Scoreboard = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 75%;
    border-radius: 0.5rem;
    margin: 1rem 0;
    background-color: #00d68f;
`;

export const ScoreboardElements = styled(List)`
    padding: 0.8rem 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const ScoreboardListItem = styled(ListItem)`
    display: flex;
    align-items: center;
`;
