let pawn = new PieceInfo(['./images/Pawn.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])
let dux = new PieceInfo(['./images/Dux.png', './images/DuxVariation.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, false, false),new Move([new Vector2(1,0)], 'Standard', false, false, false), new Move([new Vector2(0,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,0)], 'Standard', false, false, false)])

let board
let whitePieces =Array()
let blackPieces = Array()
let possibleMoves = Array()
let pieceSelected
let whiteTurn = true
let currentEnemyPieces = blackPieces
let currentTeamPieces = whitePieces
let playerOneText = document.getElementById('PlayerOneText')
let playerTwoText = document.getElementById('PlayerTwoText')

function Main(){
    board = CreateBoard(12,8)
    SetupPieces()
    playerOneText.style.borderColor = 'black'
}

let CalculatePossibleMoves = (piece, enemyPieces, colorTiles) => {

}

let ExclusiveMoveChecks = () => {

}

function SetupPieces(){
    //White Pieces
    for(let i = 0; i < board.length; i++){
        whitePieces.push(CreatePiece(pawn, 0, board[i][7], document.createElement('img')))
    }
    whitePieces.push(CreatePiece(dux, 0, board[board.length/2][6], document.createElement('img')))
    
    //Black Pieces
    for(let i = 0; i < board.length; i++){
        blackPieces.push(CreatePiece(pawn, 0, board[i][0], document.createElement('img')))
    }
    blackPieces.push(CreatePiece(dux, 1, board[board.length/2][1], document.createElement('img')))


    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}

Main()