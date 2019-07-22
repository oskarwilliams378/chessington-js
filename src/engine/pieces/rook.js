import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = [];
        for (let i = 0; i<8;i++) {
            let newLocationRow;
            let newLocationCol;
            if (i !== location.row){
                newLocationRow  = new Square(i, location.col);
                locations.push(newLocationRow);
            }
            if (i !== location.col) {
                newLocationCol  = new Square(location.row, i);
                locations.push(newLocationCol);
            }     
        }

        return locations;
    }
}
