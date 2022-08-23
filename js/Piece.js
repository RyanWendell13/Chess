class Piece {
    constructor(newInfo, newTile, newElement){
        this.info = newInfo,
        this.tile = newTile,
        this.moved = false,
        this.element = newElement
    }
}


//creates and styles pieces
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


function DeletePiece(piece){
    piece.element.parentNode.removeChild(piece.element)
    piece.tile.piece = null
    whitePieces = whitePieces.filter(p => p !== piece )
    blackPieces = blackPieces.filter(p => p !== piece )
    
}