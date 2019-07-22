import Square from '../square';

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) { // eslint-disable-line no-unused-vars
        board = 0;
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

    pieceMoves(board, location, distance, directions){
        const locations = [];
        directions.forEach(item => {
            for (let i = 1; i <= distance; i++) {
                const newLocation = new Square(location.row + i*item.y, location.col + i*item.x);
                if (this.isMoveValid(board, newLocation, location)) {
                    locations.push(newLocation);
                } else {
                    try{
                        if (board.getPiece(newLocation).player !== board.getPiece(location).player){
                            locations.push(newLocation);
                        }
                    } catch(e){} // eslint-disable-line no-empty
                    break;
                }
            }
        });
        return locations;
    }
}
