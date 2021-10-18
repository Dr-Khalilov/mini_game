export interface IGameState {
    userChoice?: string,
    pcChoice?: string,
    roundWinner?: string,
    whoWon?: string,
    userPoint?: number,
    pcPoint?: number,
    countRounds?: number,
    roundLimit?: number,
    isHidden?: boolean,
}