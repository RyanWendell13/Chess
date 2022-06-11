let pawn = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let rook = new PieceInfo('./images/Rook+outline.png', [new Move(new Vector2(0,1), 'Standard', false, true, false),new Move(new Vector2(1,0), 'Standard', false, true, false), new Move(new Vector2(0,-1), 'Standard', false, true, false),new Move(new Vector2(-1,0), 'Standard', false, true, false)])

let knight = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let bishop = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let queen = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let king = new PieceInfo('./images/Pawn+outline.png', [new Move(new Vector2(0,2), 'MoveOnly', false, false, true), new Move(new Vector2(0,1), 'MoveOnly', false, false, false), new Move(new Vector2(1,1), 'AttackOnly', false, false, false), new Move(new Vector2(-1,1), 'AttackOnly', false, false, false)])

let board
let possibleMoves = Array()
let pieceSelected
function Main(){
    board = CreateBoard()
    CreatePieces()
}

function Check(){

}

function CreateBoard(){
    tempBoard = Array(8).fill().map(()=>Array(8))
    let isWhite = false;
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let newTile = new Tile(new Vector2(i,j),document.createElement('img'))
            newTile.element.addEventListener('click',event => (TileClicked(event.target)))
            if(isWhite == true){
                newTile.element.src = './images/white.png'
                isWhite = false
            }
            else{
                newTile.element.src = './images/black.png'
                isWhite = true
            }
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

function TileClicked(element){
    clickedTile = FindTileByElement(element)
    console.log(clickedTile)
    if(pieceSelected == null && clickedTile.piece != null){
        pieceSelected = clickedTile.piece
        CalculatePossibleMoves()
    }
    // else if(possibleMoves.contains()){

    // }
}

function CreatePieces(){
    //white player
    //create white player pawns
    for(let i = 0; i < 8; i++){
        let newPiece = new Piece(pawn, board[i][1], document.createElement('img'))
        newPiece.element.src = newPiece.info.image
        newPiece.element.style.position = 'absolute'
        newPiece.element.style.zIndex = 1;
        newPiece.element.style.left =(i*42.5)+554+'px'
        newPiece.element.style.bottom = '284px'
        document.body.appendChild(newPiece.element);
        
        //newPiece.board.element.appendChild(newPiece.element)
    }
}

function CalculatePossibleMoves(){

}

function DestoryPiece(){

}

function FindTileByElement(element){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(board[i][j].element == element){
                return board[i][j]
            }
        }
    }
}

Main()

