import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    isLocationValid(location) {
        return location.row <= 7 && location.row >= 0 && location.col <= 7 && location.col >= 0;
    }

    isMoveValid(location) {
        return this.isLocationValid(location) && !this.getPiece(location);
    }

    findPieceMoves(piece, distance, directions) {
        const location = this.findPiece(piece);
        const moves = [];

        directions.forEach(direction => {
            for (let i = 1; i <= distance; i++) {
                const newLocation = new Square(location.row + i * direction.y, location.col + i * direction.x);

                if (this.isMoveValid(newLocation, location)) {
                    moves.push(newLocation);
                    continue;
                }
                
                if (this.isLocationValid(newLocation)
                    && !!this.getPiece(newLocation)
                    && this.getPiece(newLocation).player !== piece.player) {
                    moves.push(newLocation);
                }
                break;
            }
        });
        return moves;
    }
}
