let pawn = new PieceInfo(['./images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])
let rook = new PieceInfo(['./images/Rook.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])
let knight = new PieceInfo(['./images/Knight.png', './images/KnightVariation.png'], 1, [new Move([new Vector2(1,2)], 'Standard', true, false, false),new Move([new Vector2(-1,2)], 'Standard', true, false, false),new Move([new Vector2(2,1)], 'Standard', true, false, false),new Move([new Vector2(2,-1)], 'Standard', true, false, false),new Move([new Vector2(1,-2)], 'Standard', true, false, false),new Move([new Vector2(-1,-2)], 'Standard', true, false, false),new Move([new Vector2(-2,1)], 'Standard', true, false, false),new Move([new Vector2(-2,-1)], 'Standard', true, false, false)])
let bishop = new PieceInfo(['./images/Bishop.png'], 1, [new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false), new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let queen = new PieceInfo(['./images/Queen.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false),new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])
let king = new PieceInfo(['./images/King.png'], 1, [new Move([new Vector2(0,1)], 'Standard', false, false, false),new Move([new Vector2(1,1)], 'Standard', false, false, false),new Move([new Vector2(1,0)], 'Standard', false, false, false),new Move([new Vector2(1,-1)], 'Standard', false, false, false),new Move([new Vector2(0,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,0)], 'Standard', false, false, false),new Move([new Vector2(-1,1)], 'Standard', false, false, false)])

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
    let isWhite = false;
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

function CreatePiece(type, imageIndex, boardPos, element){
    let newPiece = new Piece(type, boardPos, element)
    newPiece.element.src = newPiece.info.image[imageIndex]
    newPiece.element.style.position = 'absolute'
    newPiece.element.style.bottom = type.yOffset +'px'
    newPiece.element.style.zIndex = 10+boardPos.pos.y
    newPiece.element.addEventListener('onClick',event => Clicked(event.target))
    boardPos.element.appendChild(newPiece.element)
    boardPos.piece = newPiece
    return newPiece
}

function Clicked(element){
    let obj = FindElement(element)
    let clickedTile
    if(obj.pos == null){
        clickedTile = obj.tile
    }
    else{
        clickedTile = obj
    }
    console.log(clickedTile)
    if(clickedTile.piece != null){
        if(clickedTile.piece != pieceSelected ){
            if((whiteTurn == true && blackPieces.includes(clickedTile.piece) == false) || (whiteTurn == false && whitePieces.includes(clickedTile.piece) == false)){
                DeletePossibleMoves()
                pieceSelected = clickedTile.piece
                possibleMoves = CalculatePossibleMoves(pieceSelected, currentEnemyPieces, true)
            }
            else if (pieceSelected != null && possibleMoves.includes(clickedTile)){
                DeletePiece(clickedTile.piece)
                MovePiece(pieceSelected, clickedTile)
            }
        }
    }
    else if(pieceSelected != null && possibleMoves.includes(clickedTile)){
            MovePiece(pieceSelected, clickedTile)
    }
}

function MovePiece(piece, tile){
    tile.element.appendChild(pieceSelected.element)
    DeletePossibleMoves()
    //pawn promotion
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

    piece.tile.piece = null
    piece.tile = tile
    piece.moved = true
    tile.piece = piece
    pieceSelected = null
    piece.element.style.zIndex = 10+tile.pos.y
    checkInfo = CheckForCheck(piece, currentTeamPieces, null, null)
    if(checkInfo[0] == true){
        DrawCheck(piece, checkInfo)
        CheckForCheckMate(currentEnemyPieces)
    }
    ChangeTurn()
}

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

function Win(){
    let popup = document.getElementById('WinPopup')
    if(whiteTurn == true){
        document.getElementById('WinText').innerHTML = 'Player One Wins'
    }
    else{
        document.getElementById('WinText').innerHTML = 'Player Two Wins'
    }
    popup.style.visibility = 'visible'
}

function NewGame(){
    whitePieces.forEach(p => DeletePiece(p))
    blackPieces.forEach(p => DeletePiece(p))
    if(whiteTurn == false){
        ChangeTurn()
    }
    ResetBoardColor()
    SetupPieces()
    let popup = document.getElementById('WinPopup')
    popup.style.visibility = 'hidden'


    

}

function ResetBoardColor(){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            board[i][j].element.style.backgroundColor =  board[i][j].color
        }
    }
}

function DrawCheck(piece, checkInfo){
    let newPos = piece.tile.pos
    board[newPos.x][newPos.y].element.style.backgroundColor = 'blue'
    if(piece.info.moves[checkInfo[1]].isRepeating == true){
        let invalidMove = false
        let incrementer = 0
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
        for(let i = 0; i < piece.info.moves[checkInfo[1]].iterators.length; i++){
            newPos = new Vector2(newPos.x+piece.info.moves[checkInfo[1]].iterators[i].x*GetTeamModifier(),newPos.y+piece.info.moves[checkInfo[1]].iterators[i].y*GetTeamModifier())
            if(IsInsideBoard(newPos) == true){
                board[newPos.x][newPos.y].element.style.backgroundColor = 'blue'
                
            }
        }
    }
    
}

function ChangeTurn(){
    if(whiteTurn == false){
        whiteTurn = true
        playerOneText.style.borderColor = 'black'
        playerTwoText.style.borderColor = 'white'
        currentEnemyPieces = blackPieces
        currentTeamPieces = whitePieces
    }
    else{
        whiteTurn = false
        playerOneText.style.borderColor = 'white'
        playerTwoText.style.borderColor = 'black'
        currentEnemyPieces = whitePieces
        currentTeamPieces = blackPieces
    }
}

function DeletePossibleMoves(){
    ResetBoardColor()
    possibleMoves.length = 0
}

function DeletePiece(piece){
    piece.tile.element.removeChild(piece.element)
}

function CheckForPossibleCheck(enemyPieces, currentTile, futureTile){
    for(let i = 0; i < enemyPieces.length; i++){
        if(CheckForCheck(enemyPieces[i], enemyPieces, currentTile, futureTile)[0] == true){
            return true
        }
    }
    return false
                                   
}
function CheckForCheck(piece, pieceTeam, currentTile, futureTile){
    for(let j = 0; j < piece.info.moves.length; j++){
        let newPos = piece.tile.pos
        if(piece.info.moves[j].isRepeating == true){
            let invalidMove = false
            while (invalidMove == false){
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
        else{
            let invalidMove = false
            for(let k = 0; k < piece.info.moves[j].iterators.length; k++){
                newPos = new Vector2(newPos.x+piece.info.moves[j].iterators[k].x*GetTeamModifier(piece),newPos.y+piece.info.moves[j].iterators[k].y*GetTeamModifier(piece))
                if(IsInsideBoard(newPos) == true && invalidMove == false){
                    if((board[newPos.x][newPos.y].piece != null && board[newPos.x][newPos.y] != currentTile)){
                        if(pieceTeam.includes(board[newPos.x][newPos.y].piece) == false && board[newPos.x][newPos.y].piece.info == king  ){
                            if(piece.info.moves[j].type == 'Standard'||piece.info.moves[j].type == 'AttackOnly'){
                                return [true, j]
                                
                            }
                        }
                        else{
                            invalidMove = true
                        }
                    }
                    else if(board[newPos.x][newPos.y] == futureTile){
                        if(currentTile.piece.info == king){
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
    return [false, 0]
}

function CalculatePossibleMoves(piece, enemyPieces, colorTiles){
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
                            console.log(board[newPos.x][newPos.y])
                            if(CheckForPossibleCheck(enemyPieces,piece.tile,board[newPos.x][newPos.y]) == false){
                                console.log('correct')
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
                        if(CheckForPossibleCheck(enemyPieces,piece.tile,board[newPos.x][newPos.y]) == false){
                            if(board[newPos.x][newPos.y].piece != null){
                                if((enemyPieces.includes(board[newPos.x][newPos.y].piece) == false)){
                                    invalidMove = true
                                }
                                else if(piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'AttackOnly'){
                                    if(colorTiles == true){
                                        board[newPos.x][newPos.y].element.style.backgroundColor = 'red'
                                    }
                                    tempMoves.push(board[newPos.x][newPos.y])
                                }
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
                    }
                }
            }
        }
    }
    return tempMoves
}
function IsInsideBoard(pos){
    if(pos.x <= 7 && pos.y <= 7 && pos.x >= 0 && pos.y >= 0){
        return true
    }
    else{
        return false
    }
}

function GetTeamModifier(piece){
    let teamModifier = 1
    if(whitePieces.includes(piece) == true){
        teamModifier = -1
    }
    return teamModifier
}

function FindElement(element){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(board[i][j].element == element){
                return board[i][j]
            }
        }
    }
    for(let i = 0; i < whitePieces.length; i++){
        if(whitePieces[i].element == element){
            return whitePieces[i]
        }
    }
    for(let i = 0; i < blackPieces.length; i++){
        if(blackPieces[i].element == element){
            return blackPieces[i]
        }
    }
    
}

Main()