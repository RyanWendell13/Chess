
let CreateBoard = (x,y) => {
    background = document.getElementById('Board')
    background.style.width = (160+x*42.5)+'px'
    background.style.height = (160+y*42.5)+'px'
    tempBoard = Array(x).fill().map(()=>Array(y))
    let isWhite = true;
    for(let i = 0; i < x; i++){
        for(let j = 0; j < y; j++){
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
            newTile.element.style.position = 'absolute'
            newTile.element.style.marginLeft = 160/2+(i*42.5)+'px'
            newTile.element.style.marginTop = 160/2+(j*42.5)+'px'
            tempBoard[i][j] = newTile
        }
        if (tempBoard.length % 2 == 0){
            if(isWhite == true){
                isWhite = false
            }
            else{
                isWhite = true
            }   
        }
    }
    return tempBoard
}


let DeleteBoard = () => {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            board[i][j].element.parentNode.removeChild(board[i][j].element)
        }
    }
    board = null
}


let ResetBoardColor = () => {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            board[i][j].element.style.backgroundColor =  board[i][j].color
        }
    }
}


let IsInsideBoard = (pos) => {
    if(pos.x < board.length && pos.y < board[0].length && pos.x >= 0 && pos.y >= 0){
        return true
    }
    else{
        return false
    }
}
