let pawn = new PieceInfo('pawn',['./images/Pawn.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])
let dux = new PieceInfo('dux',['./images/Dux.png', './images/DuxVariation.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, false, false),new Move([new Vector2(1,0)], 'MoveOnly', false, false, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, false, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, false, false)])

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


function CheckForCapture(){
    
}

//finds and dispalys all possible moves for a piece
let CalculatePossibleMoves = (piece, enemyPieces, colorTiles) => {
    let tempMoves = Array()
    for(let i = 0; i < piece.info.moves.length; i++){
        let newPos = piece.tile.pos
        if(piece.info.moves[i].firstMove == false || piece.moved == false){
            if(piece.info.moves[i].isRepeating == true){
                //repeating
                let invalidMove = false
                while(invalidMove == false){
                    for(let j = 0; j < piece.info.moves[i].iterators.length; j++){
                        newPos = new Vector2(newPos.x+piece.info.moves[i].iterators[j].x*GetTeamModifier(piece),newPos.y+piece.info.moves[i].iterators[j].y*GetTeamModifier(piece))
                        if(IsInsideBoard(newPos) && invalidMove == false){
                                if(board[newPos.x][newPos.y].piece != null){
                                    if((enemyPieces.includes(board[newPos.x][newPos.y].piece) == false)){
                                        invalidMove = true
                                    }
                                    else if(piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'AttackOnly'){
                                        if(colorTiles == true){
                                            board[newPos.x][newPos.y].element.style.backgroundColor = 'red'
                                        }
                                        tempMoves.push(board[newPos.x][newPos.y])
                                        invalidMove = true
                                    }
                                    
                                }
                                else if (board[newPos.x][newPos.y].piece == null){
                                    if(piece.info.moves[i].type == 'Standard'|| piece.info.moves[i].type == 'MoveOnly'){
                                        if(colorTiles == true){
                                            board[newPos.x][newPos.y].element.style.backgroundColor = 'yellow'
                                        }
                                        tempMoves.push(board[newPos.x][newPos.y])
                                    }  
                                }
                            
                        }
                        else{
                            invalidMove = true
                        }
                    }
                }
            }
            else{
                let invalidMove = false
                //non repeating moves
                for(let j = 0; j < piece.info.moves[i].iterators.length; j++){
                    newPos = new Vector2(newPos.x+piece.info.moves[i].iterators[j].x*GetTeamModifier(piece),newPos.y+piece.info.moves[i].iterators[j].y*GetTeamModifier(piece))
                        if(IsInsideBoard(newPos) && invalidMove == false){
                                if(board[newPos.x][newPos.y].piece != null){
                                    if((enemyPieces.includes(board[newPos.x][newPos.y].piece) == false)){
                                        invalidMove = true
                                    }
                                    else if(piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'AttackOnly'){
                                        if(colorTiles == true){
                                            board[newPos.x][newPos.y].element.style.backgroundColor = 'red'
                                        }
                                        tempMoves.push(board[newPos.x][newPos.y])
                                        invalidMove = true
                                    }
                                }
                                    
                                else if (board[newPos.x][newPos.y].piece == null){
                                    if(piece.info.moves[i].type == 'Standard'|| piece.info.moves[i].type == 'MoveOnly'){
                                        if(colorTiles == true){
                                            board[newPos.x][newPos.y].element.style.backgroundColor = 'yellow'
                                        }
                                        tempMoves.push(board[newPos.x][newPos.y])
                                    }  
                                }
                            
                        }
                        else{
                            invalidMove = true
                        }
                }
            }
        }
    }
    return tempMoves
}
Main()