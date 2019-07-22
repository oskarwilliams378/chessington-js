import Piece from './piece';
import Square from '../square';
import Direction from './direction';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const directions = [
            new Direction(2, 1),
            new Direction(2, -1),
            new Direction(-2, 1),
            new Direction(-2, -1),
            new Direction(1, 2),
            new Direction(1, -2),
            new Direction(-1, 2),
            new Direction(-1, -2)
        ];
        return this.pieceMoves(board, location, 1, directions);





        // const locations = [];
        // locations.push(new Square(location.row + 1, location.col + 2));
        // locations.push(new Square(location.row + 1, location.col - 2));
        // locations.push(new Square(location.row - 1, location.col + 2));
        // locations.push(new Square(location.row - 1, location.col - 2));
        // locations.push(new Square(location.row + 2, location.col + 1));
        // locations.push(new Square(location.row + 2, location.col - 1));
        // locations.push(new Square(location.row - 2, location.col + 1));
        // locations.push(new Square(location.row - 2, location.col - 1));

        // return this.filterInvalidMoves(locations);
    }
}
