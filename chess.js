let pawn = new PieceInfo(['./images/Pawn.png'], 0, [new Move([new Vector2(0,1), new Vector2(0,1)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])

let rook = new PieceInfo(['./images/Rook.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])

let knight = new PieceInfo(['./images/Knight.png', './images/KnightVariation.png'], 1, [new Move([new Vector2(1,2)], 'Standard', true, false, false),new Move([new Vector2(-1,2)], 'Standard', true, false, false),new Move([new Vector2(2,1)], 'Standard', true, false, false),new Move([new Vector2(2,-1)], 'Standard', true, false, false),new Move([new Vector2(1,-2)], 'Standard', true, false, false),new Move([new Vector2(-1,-2)], 'Standard', true, false, false),new Move([new Vector2(-2,1)], 'Standard', true, false, false),new Move([new Vector2(-2,-1)], 'Standard', true, false, false)])

let bishop = new PieceInfo(['./images/Bishop.png'], 1, [new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, false, true, false), new Move([new Vector2(-1,-1)], 'Standard', false, false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, false, true, false)])

let queen = new PieceInfo(['./images/Queen.png'], 0, [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false),new Move([new Vector2(1,-1)], 'Standard', false, true, false),new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false),new Move([new Vector2(-1,1)], 'Standard', false, true, false)])

let king = new PieceInfo(['./images/King.png'], 1, [new Move([new Vector2(0,1)], 'Standard', false, false, false),new Move([new Vector2(1,1)], 'Standard', false, false, false),new Move([new Vector2(1,0)], 'Standard', false, false, false),new Move([new Vector2(1,-1)], 'Standard', false, false, false),new Move([new Vector2(0,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,-1)], 'Standard', false, false, false),new Move([new Vector2(-1,0)], 'Standard', false, false, false),new Move([new Vector2(-1,1)], 'Standard', false, false, false)])

let board
let whitePieces =Array()
let blackPieces = Array()
let possibleMoves = Array()
let pieceSelected

let whiteTurn = true


function Main(){
    board = CreateBoard()
    SetupPieces()
}

function Check(){

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
            //i*42.5)+500+'px'
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


    whitePieces.push(CreatePiece(knight, 1, board[1][7], document.createElement('img')))
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
    blackPieces.push(CreatePiece(knight, 0, board[6][0], document.createElement('img')))

    blackPieces.push(CreatePiece(bishop, 0, board[2][0], document.createElement('img')))
    blackPieces.push(CreatePiece(bishop, 0, board[5][0], document.createElement('img')))

    blackPieces.push(CreatePiece(queen, 0, board[4][0], document.createElement('img')))
    blackPieces.push(CreatePiece(king, 0, board[3][0], document.createElement('img')))

    blackPieces.forEach(piece => {
        piece.element.style.filter = "brightness(50%)"
    })
    

}
function CreatePiece(type, imageIndex, boardPos, element){
    let newPiece = new Piece(type, boardPos, element)
    newPiece.element.src = newPiece.info.image[imageIndex]
    newPiece.element.style.position = 'absolute'
    newPiece.element.style.bottom = type.yOffset+'px'
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
        if(clickedTile.piece != pieceSelected){
            DeletePossibleMoves()
            console.log(blackPieces.includes(clickedTile.piece))
            if(whiteTurn == true && blackPieces.includes(clickedTile.piece) == false){
                pieceSelected = clickedTile.piece
                CalculatePossibleMoves(pieceSelected)
            }
            else if(whiteTurn == false && whitePieces.includes(clickedTile.piece) == false){
                pieceSelected = clickedTile.piece
                CalculatePossibleMoves(pieceSelected)
            }
        }
    }

    else if(pieceSelected != null){
        if (possibleMoves.includes(clickedTile)){
            clickedTile.element.appendChild(pieceSelected.element)
            DeletePossibleMoves()
            pieceSelected.tile.piece = null
            pieceSelected.tile = clickedTile
            pieceSelected.moved = true
            clickedTile.piece = pieceSelected
            pieceSelected = null
            if(whiteTurn == true){
                whiteTurn = false
            }
            else{
                whiteTurn = true
            }
            

        }
    }
}

function DeletePossibleMoves(){
    console.log(possibleMoves.length)
    for(let i = 0; i < possibleMoves.length; i++){
        possibleMoves[i].element.style.backgroundColor = possibleMoves[i].color
    }
    possibleMoves.length = 0
}



function CalculatePossibleMoves(piece, enemyPieces){
    let teamModifier = 1
    if(whiteTurn == true){
        teamModifier = -1
    }
    for(let i = 0; i < piece.info.moves.length; i++){
        let newPos = piece.tile.pos
        if(piece.info.moves[i].firstMove == false || piece.moved == false){

            if(piece.info.moves[i].isRepeating == true){

                console.log("move repeating")
                let invalidMove = false

                while(invalidMove == false){

                    for(let j = 0; j < piece.info.moves[i].iterators.length; j++){
                        newPos = new Vector2(newPos.x+piece.info.moves[i].iterators[j].x*teamModifier,newPos.y+piece.info.moves[i].iterators[j].y*teamModifier)
                        
                        if(newPos.x <= 7 && newPos.y <= 7 && newPos.x >= 0 && newPos.y >= 0){
                            if(board[newPos.x][newPos.y].piece != null && (piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'AttackOnly')){
                                board[newPos.x][newPos.y].element.style.backgroundColor = 'red'
                                possibleMoves.push(board[newPos.x][newPos.y])
                                if(piece.canMoveOver != true){
                                    invalidMove = true
                                }
                            }
                            else if (piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'MoveOnly'){
                                board[newPos.x][newPos.y].element.style.backgroundColor = 'yellow'
                                possibleMoves.push(board[newPos.x][newPos.y])
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
                    newPos = new Vector2(newPos.x+piece.info.moves[i].iterators[j].x*teamModifier,newPos.y+piece.info.moves[i].iterators[j].y*teamModifier)
                    if(newPos.x <= 7 && newPos.y <= 7 && newPos.x >= 0 && newPos.y >= 0 && invalidMove == false){
                        if(board[newPos.x][newPos.y].piece != null){
                            if(piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'AttackOnly'){
                                board[newPos.x][newPos.y].element.style.backgroundColor = 'red'
                                possibleMoves.push(board[newPos.x][newPos.y])
                            }
                            
                            if(piece.info.moves[i].canMoveOver == false){
                                invalidMove = true
                            }
                            
                        }
                        else if (board[newPos.x][newPos.y].piece == null){
                            if(piece.info.moves[i].type == 'Standard'|| piece.info.moves[i].type == 'MoveOnly'){
                                board[newPos.x][newPos.y].element.style.backgroundColor = 'yellow'
                                possibleMoves.push(board[newPos.x][newPos.y])
                            }  
                        }
                        
                    }
                }
            }
        }
    }
}



function DestoryPiece(){

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

