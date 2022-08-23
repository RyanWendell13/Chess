

function DeleteBoard(){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            board[i][j].element.parentNode.removeChild(board[i][j].element)
        }
    }
    board = null
}


function CreateBoard(){
    tempBoard = Array(8).fill().map(()=>Array(8))
    let isWhite = true;
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