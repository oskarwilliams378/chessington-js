import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = [];
        for (let i = 1; i < 8; i++) {
            locations.push(new Square(location.row + i, location.col + i));
            locations.push(new Square(location.row + i, location.col - i));
            locations.push(new Square(location.row - i, location.col + i));
            locations.push(new Square(location.row - i, location.col - i));
        }
        return this.filterInvalidMoves(locations);
    }
}
