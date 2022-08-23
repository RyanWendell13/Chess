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
    board = CreateBoard()
    SetupPieces()
    playerOneText.style.borderColor = 'black'
}


function CreateBoard(){
    tempBoard = Array(8).fill().map(()=>Array(8))
    let isWhite = true;
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let newTile
            if(isWhite == true){
                newTile = new Tile(new Vector2(i,j),document.createElement('div'), 'white')
                isWhite = false
            }
            else{
                newTile = new Tile(new Vector2(i,j),document.createElement('div'), 'black')
                isWhite = true
            }
            newTile.element.addEventListener('click',event => (Clicked(event.target)))
            newTile.element.style.backgroundColor = newTile.color
            newTile.element.style.width = '42.5px'
            newTile.element.style.height = '42.5px'
            document.getElementById('Board').appendChild(newTile.element)
            //(i*42.5)+500+'px'
            newTile.element.style.position = 'absolute'
            newTile.element.style.marginLeft = (i*42.5)+((8*42.5)/4)+'px'
            newTile.element.style.marginTop = (j*42.5)+80+'px'
            tempBoard[i][j] = newTile
        }
        if(isWhite == true){
            isWhite = false
        }
        else{
            isWhite = true
        }
    }
    return tempBoard
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