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
            const newLocation = new Square(location.row + i, location.col + i);
            locations.push(newLocation);
            if (locations.length !== this.filterInvalidMoves(locations).length){
                locations.pop();
                break;
            }else {
                if (board.getPiece(newLocation)){
                    locations.pop();
                    break;
                }
            }
        }
        console.log(locations);
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row - i, location.col + i);
            locations.push(newLocation);
            if (locations.length !== this.filterInvalidMoves(locations).length){
                locations.pop();
                break;
            }else {
                if (board.getPiece(newLocation)){
                    locations.pop();
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row + i, location.col - i);
            locations.push(newLocation);
            if (locations.length !== this.filterInvalidMoves(locations).length){
                locations.pop();
                break;
            }else {
                if (board.getPiece(newLocation)){
                    locations.pop();
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row - i, location.col - i);
            locations.push(newLocation);
            if (locations.length !== this.filterInvalidMoves(locations).length){
                locations.pop();
                break;
            }else {
                if (board.getPiece(newLocation)){
                    locations.pop();
                    break;
                }
            }
        }
        return this.filterInvalidMoves(locations);
    }
}
