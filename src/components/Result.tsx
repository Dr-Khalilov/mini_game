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
        <h3>You choice: {userChoice}</h3>
        <h3>PC choice: {pcChoice}</h3>
        <h4>Round winner: {roundWinner}</h4>
        <h4>User point: {userPoint}</h4>
        <h4>PC point: {pcPoint}</h4>
        <h4>Count rounds: {countRounds}</h4>
        <h4>Who won: {whoWon}</h4>
    </>
);
