let pawn = new PieceInfo('./images/Pawn+outline.png', [new Move([new Vector2(0,2)], 'MoveOnly', false, false, true), new Move([new Vector2(0,1)], 'MoveOnly', false, false, false), new Move([new Vector2(1,1)], 'AttackOnly', false, false, false), new Move([new Vector2(-1,1)], 'AttackOnly', false, false, false)])

let rook = new PieceInfo('./images/Rook+outline.png', [new Move([new Vector2(0,1)], 'Standard', false, true, false),new Move([new Vector2(1,0)], 'Standard', false, true, false), new Move([new Vector2(0,-1)], 'Standard', false, true, false),new Move([new Vector2(-1,0)], 'Standard', false, true, false)])

let knight = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let bishop = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let queen = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let king = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let board
let whitePieces =Array()
let blackPieces = Array()
let possibleMoves = Array()
let pieceSelected


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
            newTile.element.style.bottom = (j*42.5)+240+'px'
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
            pieceSelected = clickedTile.piece
            CalculatePossibleMoves(pieceSelected)
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

function SetupPieces(){
    //white player
    //create white player pawns
    for(let i = 0; i < 8; i++){
        whitePieces.push(CreatePiece(pawn, board[i][1], document.createElement('img')))
    }
    whitePieces.push(CreatePiece(rook, board[0][0], document.createElement('img')))

}
function CreatePiece(type, boardPos, element){
    let newPiece = new Piece(type, boardPos, element)
    newPiece.element.src = newPiece.info.image
    newPiece.element.style.position = 'absolute'
    newPiece.element.addEventListener('onClick',event => Clicked(event.target))
    boardPos.element.appendChild(newPiece.element)
    boardPos.piece = newPiece
    return newPiece
}

function CalculatePossibleMoves(piece){
   
    for(let i = 0; i < piece.info.moves.length; i++){
        let newPos = piece.tile.pos
        if(piece.info.moves[i].firstMove == false || piece.moved == false){

            if(piece.info.moves[i].isRepeating == true){

                console.log("move repeating")
                let invalidMove = false

                while(invalidMove == false){

                    for(let j = 0; j < piece.info.moves[i].iterators.length; j++){
                        newPos = new Vector2(newPos.x+piece.info.moves[i].iterators[j].x,newPos.y+piece.info.moves[i].iterators[j].y)
                        
                        if(newPos.x <= 7 && newPos.y <= 7 && newPos.x >= 0 && newPos.y >= 0){
                            if(board[newPos.x][newPos.y].piece != null && (piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'AttackOnly')){
                                board[newPos.x][newPos.y].element.style.backgroundColor = 'red'
                                possibleMoves.push(board[newPos.x][newPos.y])
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
                //non repeating moves
                for(let j = 0; j < piece.info.moves[i].iterators.length; j++){
                    newPos = new Vector2(newPos.x+piece.info.moves[i].iterators[j].x,newPos.y+piece.info.moves[i].iterators[j].y)
                    if(newPos.x <= 7 && newPos.y <= 7 && newPos.x >= 0 && newPos.y >= 0){

                        if(board[newPos.x][newPos.y].piece != null && (piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'AttackOnly')){
                            board[newPos.x][newPos.y].element.style.backgroundColor = 'red'
                            possibleMoves.push(board[newPos.x][newPos.y])
                        }
                        else if (piece.info.moves[i].type == 'Standard'||piece.info.moves[i].type == 'MoveOnly'){
                            board[newPos.x][newPos.y].element.style.backgroundColor = 'yellow'
                            possibleMoves.push(board[newPos.x][newPos.y])
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
            return BlackPieces[i]
        }
    }
    
}


Main()

