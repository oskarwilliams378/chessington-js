import Piece from './piece';
import Player from '../player'

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location;
        location = board.findPiece(this);
        if (this.player === Player.WHITE) {
            location.row+=1
        }else{
            location.row-=1
        }
        return location
        // return new Array(0);
    }
}
