import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        return this.rookMoves(board, location);
        // const locations = [];
        // for (let i = 1; i < 8; i++) {
        //     const newLocation = new Square(location.row + i, location.col);
        //     if (this.isMoveValid(board, newLocation)) {
        //         locations.push(newLocation);
        //     } else { break; }
        // }
        // for (let i = 1; i < 8; i++) {
        //     const newLocation = new Square(location.row - i, location.col);
        //     if (this.isMoveValid(board, newLocation)) {
        //         locations.push(newLocation);
        //     } else { break; }
        // }
        // for (let i = 1; i < 8; i++) {
        //     const newLocation = new Square(location.row, location.col + i);
        //     if (this.isMoveValid(board, newLocation)) {
        //         locations.push(newLocation);
        //     } else { break; }
        // }
        // for (let i = 1; i < 8; i++) {
        //     const newLocation = new Square(location.row, location.col - i);
        //     if (this.isMoveValid(board, newLocation)) {
        //         locations.push(newLocation);
        //     } else { break; }
        // }


        // return this.filterInvalidMoves(locations);
    }
}
