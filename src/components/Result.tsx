import React from 'react';
import { IGameState } from './IGameSate.interface';

export const Result: React.FC<IGameState> = ({
                                                 userChoice,
                                                 pcChoice,
                                                 roundWinner,
                                                 userPoint,
                                                 pcPoint,
                                                 countRounds,
                                                 whoWon,
                                             }) => (
    <>
        <h1>You choice: {userChoice}</h1>
        <h1>PC choice: {pcChoice}</h1>
        <h2>Round winner: {roundWinner}</h2>
        <h2>User point: {userPoint}</h2>
        <h2>PC point: {pcPoint}</h2>
        <h2>Count rounds: {countRounds}</h2>
        <h2>Who won: {whoWon}</h2>
    </>
);
