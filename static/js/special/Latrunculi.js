let pawn = new PieceInfo('Pawn',['/images/Pawn.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])
let dux = new PieceInfo('Dux',['/images/Dux.png', '/images/DuxVariation.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])

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
    Setup()
}
let ExclusiveMoveChecks = (piece,tile) => {
    CheckForCapture(piece,tile)
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
    blackPieces.push(CreatePiece(dux, 1, board[board.length/2-1][1], document.createElement('img')))


    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}


function CheckForCapture(piece, tile){
    console.log('running')
    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+1)) && currentEnemyPieces.includes(board[tile.pos.x][tile.pos.y+1].piece) == true){
        if(board[tile.pos.x][tile.pos.y+1].piece.info == pawn){

            if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true){

                DeletePiece(board[tile.pos.x][tile.pos.y+1].piece)
            }
        }
        else if(board[tile.pos.x][tile.pos.y+1].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) == false || board[tile.pos.x][tile.pos.y+2].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].piece != null)){

                Win()
            }
        }
    }
    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y)) && currentEnemyPieces.includes(board[tile.pos.x+1][tile.pos.y].piece) == true){
   
        if(board[tile.pos.x+1][tile.pos.y].piece.info == pawn){
       
            if(IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) && currentTeamPieces.includes(board[tile.pos.x+2][tile.pos.y].piece) == true){
           
                DeletePiece(board[tile.pos.x+1][tile.pos.y].piece)
            }
        }
        else if(board[tile.pos.x+1][tile.pos.y].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) == false || board[tile.pos.x+2][tile.pos.y].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].piece != null)){

                Win()
            }
        }
    }
    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-1)) && currentEnemyPieces.includes(board[tile.pos.x][tile.pos.y-1].piece) == true){
   
        if(board[tile.pos.x][tile.pos.y-1].piece.info == pawn){
            if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y-2].piece) == true){
                DeletePiece(board[tile.pos.x][tile.pos.y-1].piece)
            }
        }
        else if(board[tile.pos.x][tile.pos.y-1].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) == false || board[tile.pos.x][tile.pos.y-2].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].piece != null)){

                Win()
            }
        }
    }
    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y)) && currentEnemyPieces.includes(board[tile.pos.x-1][tile.pos.y].piece) == true){
   
        if(board[tile.pos.x-1][tile.pos.y].piece.info == pawn){
            if(IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) && currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true){
           
                DeletePiece(board[tile.pos.x-1][tile.pos.y].piece)
            }
        }
        else if(board[tile.pos.x-1][tile.pos.y].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == false || board[tile.pos.x-2][tile.pos.y].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].piece != null)){
                Win()
            }
        }
    }
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
                                    invalidMove = true
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
                                    invalidMove = true
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