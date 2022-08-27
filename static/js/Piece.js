class Piece {
    constructor(newInfo, newTile, newElement){
        this.info = newInfo,
        this.tile = newTile,
        this.moved = false,
        this.element = newElement
    }
}

//creates and styles pieces
let CreatePiece = (type, imageIndex, boardPos, element) => {
    let newPiece = new Piece(type, boardPos, element)
    newPiece.element.src = newPiece.info.image[imageIndex]
    newPiece.element.alt= newPiece.info.name
    newPiece.element.style.position = 'absolute'
    newPiece.element.style.bottom = type.yOffset +'px'
    newPiece.element.style.zIndex = 10+boardPos.pos.y
    newPiece.element.addEventListener('onClick',event => Clicked(event.target))
    boardPos.element.appendChild(newPiece.element)
    boardPos.piece = newPiece
    return newPiece
}


let DeletePiece = (piece) => {
    piece.element.parentNode.removeChild(piece.element)
    piece.tile.piece = null
    whitePieces = whitePieces.filter(p => p !== piece )
    blackPieces = blackPieces.filter(p => p !== piece )
    
}

let MovePiece = (piece, tile) => {
    tile.element.appendChild(pieceSelected.element)
    DeletePossibleMoves()

    piece.tile.piece = null
    piece.tile = tile
    piece.moved = true
    tile.piece = piece
    pieceSelected = null
    piece.element.style.zIndex = 10+tile.pos.y

    //run exclusive functions
    ExclusiveMoveChecks(piece, tile)
    ChangeTurn()
}