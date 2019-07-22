import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = [];
        locations.push(new Square(location.row+1, location.col+2));
        locations.push(new Square(location.row+1, location.col-2));
        locations.push(new Square(location.row-1, location.col+2));
        locations.push(new Square(location.row-1, location.col-2));
        locations.push(new Square(location.row+2, location.col+1));
        locations.push(new Square(location.row+2, location.col-1));
        locations.push(new Square(location.row-2, location.col+1));
        locations.push(new Square(location.row-2, location.col-1));
        return this.filterInvalidMoves(locations);
    }
}
