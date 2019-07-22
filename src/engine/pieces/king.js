import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = [];
        locations.push(new Square(location.row + 1, location.col + 1));
        locations.push(new Square(location.row + 1, location.col));
        locations.push(new Square(location.row + 1, location.col - 1));
        locations.push(new Square(location.row, location.col + 1));
        locations.push(new Square(location.row, location.col - 1));
        locations.push(new Square(location.row - 1, location.col + 1));
        locations.push(new Square(location.row - 1, location.col));
        locations.push(new Square(location.row - 1, location.col - 1));
        return this.filterInvalidMoves(locations);
    }
}
