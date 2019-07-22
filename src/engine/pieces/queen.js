import Piece from './piece';
import Square from '../square';
import Bishop from './bishop';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const locations = this.bishopMoves(board, location).concat(this.rookMoves(board, location));
        return locations;


        // const location = board.findPiece(this);
        // const locations = [];
        // for (let i = 1; i < 8; i++) {
        //     locations.push(new Square(location.row + i, location.col + i));
        //     locations.push(new Square(location.row + i, location.col - i));
        //     locations.push(new Square(location.row - i, location.col + i));
        //     locations.push(new Square(location.row - i, location.col - i));
        // }
        // for (let i = 0; i<8;i++) {
        //     let newLocationRow;
        //     let newLocationCol;
        //     if (i !== location.row){
        //         newLocationRow  = new Square(i, location.col);
        //         locations.push(newLocationRow);
        //     }
        //     if (i !== location.col) {
        //         newLocationCol  = new Square(location.row, i);
        //         locations.push(newLocationCol);
        //     }     
        // }
        // return this.filterInvalidMoves(locations);
    }
}
