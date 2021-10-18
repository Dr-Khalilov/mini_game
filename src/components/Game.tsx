import React, { Component } from 'react';
import { Result } from './Result';
import { IGameState } from './IGameSate.interface';

export default class Game extends Component {
    constructor(props: IGameState) {
        super(props);
        this.state = {
            userChoice: '',
            pcChoice: '',
            roundWinner: '',
            whoWon: '',
            userPoint: 0,
            pcPoint: 0,
            countRounds: 0,
            roundLimit: 20,
            isHidden: false,
        };
    }

    startGame = ({ target: { id: userChoice } }: string | any) => {
        const { roundLimit, countRounds, pcPoint, userPoint, isHidden }: Readonly<IGameState> = this.state;
        this.setState({ userChoice });
        const pcChoice: string = ['cavalry', 'archers', 'pikeman'][Math.floor(Math.random() * 3)];
        this.setState({ pcChoice });
        if ((userChoice === 'cavalry' && pcChoice === 'archers') ||
            (userChoice === 'archers' && pcChoice === 'pikeman') ||
            (userChoice === 'pikeman' && pcChoice === 'cavalry')
        ) {
            this.setState(({ userPoint, countRounds }: IGameState | any) => ({
                userPoint: userPoint + 1,
                countRounds: countRounds + 1,
                roundWinner: 'User',
            }));
        } else if (userChoice === pcChoice) {
            this.setState(({ countRounds }: IGameState | any) => ({
                roundWinner: 'Draw',
                countRounds: countRounds + 1,
            }));
        } else {
            this.setState(({ pcPoint, countRounds }: IGameState | any) => ({
                pcPoint: pcPoint + 1,
                countRounds: countRounds + 1,
                roundWinner: 'PC',
            }));
        }
        if (countRounds === roundLimit && pcPoint! < userPoint!) {
            this.setState(() => ({
                whoWon: 'User won!',
                isHidden: true,
            }));
        } else if (countRounds === roundLimit && pcPoint! > userPoint!) {
            this.setState(() => ({
                whoWon: 'PC won!',
                isHidden: true,
            }));
        } else if (countRounds === roundLimit && pcPoint === userPoint) {
            this.setState(() => ({
                whoWon: 'Draw!',
                isHidden: true,
            }));
        }
    };

    resetGame = () => this.setState({
        userChoice: '',
        pcChoice: '',
        roundWinner: '',
        whoWon: '',
        userPoint: 0,
        pcPoint: 0,
        countRounds: 0,
        isHidden: false,
    });

    render() {
        const {
            userChoice,
            pcChoice,
            roundWinner,
            userPoint,
            pcPoint,
            countRounds,
            whoWon,
            isHidden,
        }: Readonly<IGameState> = this.state;
        return (
            <>
                <Result userChoice={userChoice} pcPoint={pcPoint} roundWinner={roundWinner} pcChoice={pcChoice}
                        userPoint={userPoint} countRounds={countRounds} whoWon={whoWon} />
                {isHidden ? null : <div>
                    <button onClick={e => this.startGame(e)} id='cavalry'>Cavalry</button>
                    &nbsp;
                    <button onClick={e => this.startGame(e)} id='archers'>Archers</button>
                    &nbsp;
                    <button onClick={e => this.startGame(e)} id='pikeman'>Pikeman</button>
                </div>
                }
                <button onClick={this.resetGame}>Reset Game</button>
            </>
        );
    }

}