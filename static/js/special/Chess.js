
let pawn = new PieceInfo('pawn',['/images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let rook = new PieceInfo('rook',['/images/Rook.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])
let knight = new PieceInfo('knight',['/images/Knight.png', '/images/KnightVariation.png'], 1, [new Move([new Vector2(1,2)], 'Standard', true, false, false),new Move([new Vector2(-1,2)], 'Standard', true, false, false),new Move([new Vector2(2,1)], 'Standard', true, false, false),new Move([new Vector2(2,-1)], 'Standard', true, false, false),new Move([new Vector2(1,-2)], 'Standard', true, false, false),new Move([new Vector2(-1,-2)], 'Standard', true, false, false),new Move([new Vector2(-2,1)], 'Standard', true, false, false),new Move([new Vector2(-2,-1)], 'Standard', true, false, false)])
let bishop = new PieceInfo('bishop',['/images/Bishop.png'], 1, [new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false), new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let queen = new PieceInfo('queen',['/images/Queen.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false),new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let king = new PieceInfo('king',['/images/King.png'], 1, [new Move([new Vector2(0,1)], 'Standard', false, false, false),new Move([new Vector2(1,1)], 'Standard', false, false, false),new Move([new Vector2(1,0)], 'Standard', false, false, false),new Move([new Vector2(1,-1)], 'Standard', false, false, false),new Move([new Vector2(0,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,0)], 'Standard', false, false, false),new Move([new Vector2(-1,1)], 'Standard', false, false, false)])

let board
let whitePieces =Array()
let blackPieces = Array()
let possibleMoves = Array()
let pieceSelected = null
let whiteTurn = true
let currentEnemyPieces = blackPieces
let currentTeamPieces = whitePieces
let playerOneText = document.getElementById('PlayerOneText')
let playerTwoText = document.getElementById('PlayerTwoText')


function Main(){
    board = CreateBoard(8,8)
    Setup()
    
}
let ExclusiveMoveChecks = (piece,tile) => {
    PawnCheck(piece, tile)


    checkInfo = CheckForCheck(piece, currentTeamPieces, null, null)

    if(checkInfo[0] == true){
        DrawCheck(piece, checkInfo)
        CheckForCheckMate(currentEnemyPieces)
    }
}

let PawnCheck = (piece, tile) => {
    if (piece.info == pawn){
        if(whiteTurn == true && tile.pos.y == 0){
            piece.info = queen
            piece.element.src = piece.info.image
        }
        else if(tile.pos.y == 7){
            piece.info = queen
            piece.element.src = piece.info.image
        }
    }
}

//calls CreatePiece function to create all pieces
function SetupPieces(){
    //White Pieces
    for(let i = 0; i < 8; i++){
        whitePieces.push(CreatePiece(pawn, 0, board[i][6], document.createElement('img')))
        
    }
    whitePieces.push(CreatePiece(rook, 0, board[0][7], document.createElement('img')))
    whitePieces.push(CreatePiece(rook, 0, board[7][7], document.createElement('img')))

    whitePieces.push(CreatePiece(knight, 0, board[1][7], document.createElement('img')))
    whitePieces.push(CreatePiece(knight, 0, board[6][7], document.createElement('img')))

    whitePieces.push(CreatePiece(bishop, 0, board[2][7], document.createElement('img')))
    whitePieces.push(CreatePiece(bishop, 0, board[5][7], document.createElement('img')))

    whitePieces.push(CreatePiece(queen, 0, board[3][7], document.createElement('img')))
    whitePieces.push(CreatePiece(king, 0, board[4][7], document.createElement('img')))
    
    //Black Pieces
    for(let i = 0; i < 8; i++){
        blackPieces.push(CreatePiece(pawn, 0, board[i][1], document.createElement('img')))
    }
    blackPieces.push(CreatePiece(rook, 0, board[0][0], document.createElement('img')))
    blackPieces.push(CreatePiece(rook, 0, board[7][0], document.createElement('img')))

    blackPieces.push(CreatePiece(knight, 1, board[1][0], document.createElement('img')))
    blackPieces.push(CreatePiece(knight, 1, board[6][0], document.createElement('img')))

    blackPieces.push(CreatePiece(bishop, 0, board[2][0], document.createElement('img')))
    blackPieces.push(CreatePiece(bishop, 0, board[5][0], document.createElement('img')))

    blackPieces.push(CreatePiece(queen, 0, board[3][0], document.createElement('img')))
    blackPieces.push(CreatePiece(king, 0, board[4][0], document.createElement('img')))

    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(60%)"
    })
}



//when a check is called this is run to see if any move is available
function CheckForCheckMate(enemyPieces){
    let allPossibleCheckedMoves = Array()
    for(let i = 0; i < enemyPieces.length; i++){
        allPossibleCheckedMoves.push(...CalculatePossibleMoves(enemyPieces[i], currentTeamPieces, false))
    }
    if(allPossibleCheckedMoves.length > 0){
        return false
    }
    else{
        Win()
    }
}

//draws the check path
function DrawCheck(piece, checkInfo){
    let newPos = piece.tile.pos
    board[newPos.x][newPos.y].element.style.backgroundColor = 'blue'
    if(piece.info.moves[checkInfo[1]].isRepeating == true){
        let invalidMove = false
        while(invalidMove == false){
            for(let i = 0; i < piece.info.moves[checkInfo[1]].iterators.length; i++){
                newPos = new Vector2(newPos.x+piece.info.moves[checkInfo[1]].iterators[i].x*GetTeamModifier(piece),newPos.y+piece.info.moves[checkInfo[1]].iterators[i].y*GetTeamModifier(piece))
                
                if(IsInsideBoard(newPos) == true && invalidMove == false){
                    board[newPos.x][newPos.y].element.style.backgroundColor = 'blue'
                    if(board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y].piece.info == king){
                        invalidMove = true
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
        for(let i = 0; i < piece.info.moves[checkInfo[1]].iterators.length; i++){
            newPos = new Vector2(newPos.x+piece.info.moves[checkInfo[1]].iterators[i].x*GetTeamModifier(piece),newPos.y+piece.info.moves[checkInfo[1]].iterators[i].y*GetTeamModifier(piece))
            
            if(IsInsideBoard(newPos) == true && invalidMove == false){
                board[newPos.x][newPos.y].element.style.backgroundColor = 'blue'
                if(board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y].piece.info == king){
                    invalidMove = true
                }
                
            }
            else{
                invalidMove = true
            }
        }
    }
    
}

//makes sure move won't check the king
function CheckForPossibleCheck(enemyPieces, currentTile, futureTile, moveIndex){
    for(let i = 0; i < enemyPieces.length; i++){
        if(futureTile != null && CanMoveTakeCheckingPiece(enemyPieces[i], currentTile.piece, futureTile, moveIndex) == false){
            if(CheckForCheck(enemyPieces[i], enemyPieces, currentTile, futureTile)[0] == true){
                return true 
            }
        }
    }
    return false
                                   
}

function CanMoveTakeCheckingPiece(checkingPiece, attackPiece, futureTile, moveIndex){
    let newPos = attackPiece.tile.pos
    if(attackPiece.info.moves[moveIndex].firstMove == false || attackPiece.moved == false){
        if(attackPiece.info.moves[moveIndex].isRepeating == true){
            let invalidMove = false
            while (invalidMove == false){
                for(let i = 0; i < attackPiece.info.moves[moveIndex].iterators.length; i++){
                    newPos = new Vector2(newPos.x+attackPiece.info.moves[moveIndex].iterators[i].x*GetTeamModifier(attackPiece),newPos.y+attackPiece.info.moves[moveIndex].iterators[i].y*GetTeamModifier(attackPiece))
                    if(IsInsideBoard(newPos) == true && invalidMove == false){
                        if(board[newPos.x][newPos.y].piece != null){
                            if(board[newPos.x][newPos.y].piece == checkingPiece && futureTile == board[newPos.x][newPos.y]){
                                return true
                            }
                            else{
                                invalidMove = true
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
            for(let i = 0; i < attackPiece.info.moves[moveIndex].iterators.length; i++){
                newPos = new Vector2(newPos.x+attackPiece.info.moves[moveIndex].iterators[i].x*GetTeamModifier(attackPiece),newPos.y+attackPiece.info.moves[moveIndex].iterators[i].y*GetTeamModifier(attackPiece))
                if(IsInsideBoard(newPos) == true && invalidMove == false){
                    if(board[newPos.x][newPos.y].piece != null){
                        if(board[newPos.x][newPos.y].piece == checkingPiece && futureTile == board[newPos.x][newPos.y]){
                            return true
                        }
                        else{
                            invalidMove = true
                        }
                    }
                }
            }
        }
    }
    return false
}

//used to check apporpriate movement with checks
function CheckForCheck(piece, pieceTeam, currentTile, futureTile){
    for(let j = 0; j < piece.info.moves.length; j++){
        let newPos = piece.tile.pos
        if(piece.info.moves[j].firstMove == false || piece.moved == false){
            if(piece.info.moves[j].isRepeating == true){
                let invalidMove = false
                while (invalidMove == false){
                    for(let k = 0; k < piece.info.moves[j].iterators.length; k++){
                        newPos = new Vector2(newPos.x+piece.info.moves[j].iterators[k].x*GetTeamModifier(piece),newPos.y+piece.info.moves[j].iterators[k].y*GetTeamModifier(piece))
                        if(IsInsideBoard(newPos) == true && invalidMove == false){
                            if((board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y] != currentTile)){
                                if(pieceTeam.includes(board[newPos.x][newPos.y].piece) == false && board[newPos.x][newPos.y].piece.info == king){
                                    if(piece.info.moves[j].type == 'Standard'|| piece.info.moves[j].type == 'AttackOnly'){
                                        return [true, j]
                                    }
                                }
                                else{
                                    invalidMove = true
                                }
                            }
                            else if(board[newPos.x][newPos.y] == futureTile){
                                if(currentTile.piece != null && currentTile.piece.info == king){
                                    if(piece.info.moves[j].type == 'Standard'|| piece.info.moves[j].type == 'AttackOnly'){
                                        return [true, j]
                                    }
                                }
                                else {
                                    invalidMove = true
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
                for(let k = 0; k < piece.info.moves[j].iterators.length; k++){
                    newPos = new Vector2(newPos.x+piece.info.moves[j].iterators[k].x*GetTeamModifier(piece),newPos.y+piece.info.moves[j].iterators[k].y*GetTeamModifier(piece))
                    if(IsInsideBoard(newPos) == true && invalidMove == false){
                        if((board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y] != currentTile)){
                            if(pieceTeam.includes(board[newPos.x][newPos.y].piece) == false && board[newPos.x][newPos.y].piece.info == king){
                                if(piece.info.moves[j].type == 'Standard'||piece.info.moves[j].type == 'AttackOnly'){
                                    return [true, j]
                                }
                            }
                            else{
                                invalidMove = true
                            }
                        }
                        else if(board[newPos.x][newPos.y] == futureTile){
                            if(currentTile.piece != null && currentTile.piece.info == king){
                                if(piece.info.moves[j].type == 'Standard'||piece.info.moves[j].type == 'AttackOnly'){
                                    return [true, j]
                                }
                            }
                            else {
                                invalidMove = true
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
    return [false, 0]
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
                            if(CheckForPossibleCheck(enemyPieces,piece.tile,board[newPos.x][newPos.y],i) == false){
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
                            if(CheckForPossibleCheck(enemyPieces,piece.tile,board[newPos.x][newPos.y],i) == false){
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