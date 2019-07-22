import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let multiplier = 1;
        const locations = [];
        const location = board.findPiece(this);
        if (this.player === Player.BLACK) {
            multiplier = -1;
        }
        let newLocation = new Square(location.row + multiplier, location.col);
        if (this.isMoveValid(board, newLocation)) {
            locations.push(newLocation);
            multiplier *= 2;
            newLocation = new Square(location.row + multiplier, location.col);
            if (this.isMoveValid(board, newLocation) && (location.row === 1 || location.row === 6)) {
                locations.push(newLocation);
            }
            multiplier/=2;
        }
        try {
            newLocation = new Square(location.row + multiplier, location.col + 1);
            if (board.getPiece(newLocation).player !== board.getPiece(location).player) {
                locations.push(newLocation);
            }
        } catch (e) { } // eslint-disable-line no-empty
        try {
            newLocation = new Square(location.row + multiplier, location.col - 1);
            if (board.getPiece(newLocation).player !== board.getPiece(location).player) {
                locations.push(newLocation);
            }
        } catch (e) { } // eslint-disable-line no-empty
       
        return locations;
    }

}
