Chess Game

white[pieces]
black[pieces]

board[,[tiles]]

isWhiteTurn bool

Selected piece

Possible moves

piece{
	image: string
	moves[move]
	current tile: tile
}

Move{
	iterators[Vector 2(x,y)]
	jumpsPieces: bool
	infinite: bool
}

Vector 2{
	x
	y
}

Hard code objects for pawn, rook, knight, bishop

Tile{
	x
	y
	piece: null or piece
}

main(){
    NewGame
    if iswhiteturn true{
        turn, but pass white values, also make sure piece is white
    }

    if iswhiteturn false{
        turn, but pass black values, also make sure piece is black
    }
}


NewGame(){
    createboard()
    createPieces()


}

SelectPiece(tile){
	piece
}

Calc Possible moves(piece){

}

Show possible move( [vec2]){

}
CreateBoard(){
	generate board img elements with click listener and append to html
	
}
CreatePieces(){
	generate pieces and add them to the board
}



check (opposingTeam[pieces], king){
    prevent people from moving in a way that would check their own king.
    for{
        if piececanmoveTo() true{
            true
        }
    }
    false
}

Check Mate check if

Function PieceCanMoveTo(Vec 2)
 	calculate each path for a piece and see if it can move to that position
Return bool

Function MovePiece(vec 2, piece){
	update tile
	update piece
	move piece screen coords
	standard, move only, attack only
	move type: int maybe

}