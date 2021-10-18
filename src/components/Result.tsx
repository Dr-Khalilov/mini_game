import React from 'react';
import PropTypes from 'prop-types';

export interface IResult {
    userChoice: string,
    pcChoice: string,
    roundWinner: string,
    userPoint: number,
    pcPoint: number,
    countRounds: number,
    whoWon: string
}

export const Result: React.FC<IResult> = ({
                                              userChoice,
                                              pcChoice,
                                              roundWinner,
                                              userPoint,
                                              pcPoint,
                                              countRounds,
                                              whoWon
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

Result.propTypes = {
    userChoice: PropTypes.string.isRequired,
    pcChoice: PropTypes.string.isRequired,
    roundWinner: PropTypes.string.isRequired,
    userPoint: PropTypes.number.isRequired,
    pcPoint: PropTypes.number.isRequired,
    countRounds: PropTypes.number.isRequired,
    whoWon: PropTypes.string.isRequired,
};
