import Square from '../square';

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    filterInvalidMoves(movesList){
        movesList = movesList.filter(move => move.row<8);
        movesList = movesList.filter(move => move.row>=0);
        movesList = movesList.filter(move => move.col>=0);
        movesList = movesList.filter(move => move.col<8);
        return movesList;
    }

    isMoveValid(board, location){
        if (location.row > 7 || location.row < 0 || location.col > 7 || location.col < 0 ){
            return false;
        }
        if (board.getPiece(location)){
            return false;
        }
        return true;
        
    }

    bishopMoves(board, location){
        const locations = [];
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row + i, location.col + i);
            if (this.isMoveValid(board, newLocation)) {
                locations.push(newLocation);
            } else { break; }
        }
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row - i, location.col + i);
            if (this.isMoveValid(board, newLocation)) {
                locations.push(newLocation);
            } else { break; }
        }
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row + i, location.col - i);
            if (this.isMoveValid(board, newLocation)) {
                locations.push(newLocation);
            } else { break; }
        }
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row - i, location.col - i);
            if (this.isMoveValid(board, newLocation)) {
                locations.push(newLocation);
            } else { break; }
        }
        return locations;

    }

    rookMoves(board, location){      
        const locations = [];
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row + i, location.col);
            if (this.isMoveValid(board, newLocation)) {
                locations.push(newLocation);
            } else { break; }
        }
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row - i, location.col);
            if (this.isMoveValid(board, newLocation)) {
                locations.push(newLocation);
            } else { break; }
        }
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row, location.col + i);
            if (this.isMoveValid(board, newLocation)) {
                locations.push(newLocation);
            } else { break; }
        }
        for (let i = 1; i < 8; i++) {
            const newLocation = new Square(location.row, location.col - i);
            if (this.isMoveValid(board, newLocation)) {
                locations.push(newLocation);
            } else { break; }
        }
        return locations;
    }
}
