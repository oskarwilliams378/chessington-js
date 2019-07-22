import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = [];
        for (let i = 1; i<8;i++) {
            let newLocationRow;
            if (location.row + i>7) {break;}
            if (!board.getPiece(new Square(location.row + i, location.col))) {
                newLocationRow  = new Square(location.row + i, location.col);
                locations.push(newLocationRow);
            } else {break;}
        }
        for (let i = 1; i<8;i++) {
            if (location.col + i>7) {break;}
            let newLocationCol;
            if (!board.getPiece(new Square(location.row, location.col + i))) {
                newLocationCol  = new Square(location.row, location.col + i);
                locations.push(newLocationCol);
            } else {break;}
        }     
        for (let i = 1; i<8;i++) {
            if (location.row - i<0) {break;}
            let newLocationRow;
            if (!board.getPiece(new Square(location.row - i, location.col))) {
                newLocationRow  = new Square(location.row - i, location.col);
                locations.push(newLocationRow);
            } else {break;}
        }
        for (let i = 1; i<8;i++) {
            if (location.col - i<0) {break;}
            let newLocationCol;
            if (!board.getPiece(new Square(location.row, location.col - i))) {
                newLocationCol  = new Square(location.row, location.col - i);
                locations.push(newLocationCol);
            } else {break;}
        }    
        

        return this.filterInvalidMoves(locations);
    }
}
