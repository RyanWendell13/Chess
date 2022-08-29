let pawn = new PieceInfo('Pawn',['/images/Pawn.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])
<<<<<<< HEAD
<<<<<<< HEAD
let king = new PieceInfo('King',['/images/King.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])
=======
let dux = new PieceInfo('Dux',['/images/Dux.png', '/images/DuxVariation.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
=======
let dux = new PieceInfo('Dux',['/images/Dux.png', '/images/DuxVariation.png'], 0, [new Move([new Vector2(0,1)], 'MoveOnly', false, true, false),new Move([new Vector2(1,0)], 'MoveOnly', false, true, false), new Move([new Vector2(0,-1)], 'MoveOnly', false, true, false),new Move([new Vector2(-1,0)], 'MoveOnly', false, true, false)])
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)

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
    board = CreateBoard(9,9)
    Setup()
}
let ExclusiveMoveChecks = (piece,tile) => {
    CheckForCapture(piece,tile)
}

function SetupPieces(){
    //White Pieces
<<<<<<< HEAD
<<<<<<< HEAD
    blackPieces.push(CreatePiece(pawn, 0, board[Math.trunc(board.length/2)+1][Math.trunc(board[0].length/2)], document.createElement('img')))
    blackPieces.push(CreatePiece(pawn, 0, board[Math.trunc(board.length/2)][Math.trunc(board[0].length/2)+1], document.createElement('img')))
    blackPieces.push(CreatePiece(pawn, 0, board[Math.trunc(board.length/2)-1][Math.trunc(board[0].length/2)], document.createElement('img')))
    blackPieces.push(CreatePiece(pawn, 0, board[Math.trunc(board.length/2)][Math.trunc(board[0].length/2)-1], document.createElement('img')))


    blackPieces.push(CreatePiece(pawn, 0, board[Math.trunc(board.length/2)+2][Math.trunc(board[0].length/2)], document.createElement('img')))
    blackPieces.push(CreatePiece(pawn, 0, board[Math.trunc(board.length/2)][Math.trunc(board[0].length/2)+2], document.createElement('img')))
    blackPieces.push(CreatePiece(pawn, 0, board[Math.trunc(board.length/2)-2][Math.trunc(board[0].length/2)], document.createElement('img')))
    blackPieces.push(CreatePiece(pawn, 0, board[Math.trunc(board.length/2)][Math.trunc(board[0].length/2)-2], document.createElement('img')))
    blackPieces.push(CreatePiece(king, 0, board[Math.trunc(board.length/2)][Math.trunc(board[0].length/2)], document.createElement('img')))
=======
    for(let i = 0; i < board.length; i++){
        whitePieces.push(CreatePiece(pawn, 0, board[i][8], document.createElement('img')))
    }
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
=======
    for(let i = 0; i < board.length; i++){
        whitePieces.push(CreatePiece(pawn, 0, board[i][8], document.createElement('img')))
    }
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
    
    //Black Pieces
    for(let i = 0; i < board.length; i++){
        blackPieces.push(CreatePiece(pawn, 0, board[i][0], document.createElement('img')))
    }


    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}


function CheckForCapture(piece, tile){
<<<<<<< HEAD
<<<<<<< HEAD

    if(piece.info == king && (IsInsideBoard(new Vector2(tile.pos.x+1,tile.pos.y+1)) == false || IsInsideBoard(new Vector2(tile.pos.x-1,tile.pos.y-1)) == false)){
        Win()
    }

=======
    console.log('running')
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
=======
    console.log('running')
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+1)) && currentEnemyPieces.includes(board[tile.pos.x][tile.pos.y+1].piece) == true){
        if(board[tile.pos.x][tile.pos.y+1].piece.info == pawn){

            if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true){

                DeletePiece(board[tile.pos.x][tile.pos.y+1].piece)
            }
        }
<<<<<<< HEAD
<<<<<<< HEAD
        else if(board[tile.pos.x][tile.pos.y+1].piece.info == king){ 
            if(board[tile.pos.x][tile.pos.y+1].color != 'Red'){
                if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) == false || board[tile.pos.x][tile.pos.y+2].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].color != 'Red')){
                    if(currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true){
                        Win()
                    }
                }
                else{
                    let i = 0;
                    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) == true && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y+2].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y+1].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y+1].piece) == true){
                        i++
                    }
=======
=======
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
        else if(board[tile.pos.x][tile.pos.y+1].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y+2)) == false || board[tile.pos.x][tile.pos.y+2].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].piece != null)){
<<<<<<< HEAD
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
=======
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)

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
<<<<<<< HEAD
<<<<<<< HEAD
        else if(board[tile.pos.x+1][tile.pos.y].piece.info == king){ 
            if(board[tile.pos.x+1][tile.pos.y].color != 'Red'){
                if((IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) == false || board[tile.pos.x+2][tile.pos.y].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].color != 'Red')){
                    if(currentTeamPieces.includes(board[tile.pos.x+2][tile.pos.y].piece) == true){
                        Win()
                    }
                }
                else{
                    let i = 0;
                    if(IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) == true && currentTeamPieces.includes(board[tile.pos.x+2][tile.pos.y].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y-1].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y+1].piece) == true){
                        i++
                    }
=======
=======
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
        else if(board[tile.pos.x+1][tile.pos.y].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x+2, tile.pos.y)) == false || board[tile.pos.x+2][tile.pos.y].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y+1)) == false || board[tile.pos.x+1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].piece != null)){
<<<<<<< HEAD
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
=======
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)

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
<<<<<<< HEAD
<<<<<<< HEAD
        else if(board[tile.pos.x][tile.pos.y-1].piece.info == king){ 
            if(board[tile.pos.x][tile.pos.y-1].color != 'Red'){
                if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) == false || board[tile.pos.x][tile.pos.y-2].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].color != 'Red')){
                    if(currentTeamPieces.includes(board[tile.pos.x][tile.pos.y-2].piece) == true){
                        Win()
                    }
                }
                else{
                    let i = 0;
                    if(IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) == true && currentTeamPieces.includes(board[tile.pos.x][tile.pos.y-2].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y-1].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x+1][tile.pos.y-1].piece) == true){
                        i++
                    }
=======
=======
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
        else if(board[tile.pos.x][tile.pos.y-1].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x, tile.pos.y-2)) == false || board[tile.pos.x][tile.pos.y-2].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x+1, tile.pos.y-1)) == false || board[tile.pos.x+1][tile.pos.y-1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].piece != null)){
<<<<<<< HEAD
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
=======
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)

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
<<<<<<< HEAD
<<<<<<< HEAD
        else if(board[tile.pos.x-1][tile.pos.y].piece.info == king){ 
            if(board[tile.pos.x-1][tile.pos.y].color != 'Red'){
                if((IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == false || board[tile.pos.x-2][tile.pos.y].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].color != 'Red')
                    &&(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].color != 'Red')){
                    if(currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true){
                        Win()
                    }
                }
                else{
                    let i = 0;
                    if(IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == true && currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y-1].piece) == true){
                        i++
                    }
                    if(IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y+1].piece) == true){
                        i++
                    }

                    if (i >= 2)  {
                        Win()
                    }
                }
            }
            else{
                if((IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == true && currentTeamPieces.includes(board[tile.pos.x-2][tile.pos.y].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y-1].piece) == true)
                    && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == true && currentTeamPieces.includes(board[tile.pos.x-1][tile.pos.y+1].piece) == true)){
                        Win()
                }
=======
=======
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
        else if(board[tile.pos.x-1][tile.pos.y].piece.info == dux){
            if((IsInsideBoard(new Vector2(tile.pos.x-2, tile.pos.y)) == false || board[tile.pos.x-2][tile.pos.y].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y+1)) == false || board[tile.pos.x-1][tile.pos.y+1].piece != null)
            && (IsInsideBoard(new Vector2(tile.pos.x-1, tile.pos.y-1)) == false || board[tile.pos.x-1][tile.pos.y-1].piece != null)){
                Win()
<<<<<<< HEAD
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
=======
>>>>>>> parent of 147cc9c (Changed home display, Completed Tablut and Brandubh except for one special rule)
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