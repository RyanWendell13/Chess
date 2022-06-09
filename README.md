Chess Game

white[pieces]
black[pieces]

board[,[tiles]]

Current Turn

Selected piece

Possible moves

piece{
	image: string
	moves[move]
	current tile: tile
}

Move{
	iterators[Vector 2(x,y)]
	jumps pieces: bool
	infinit: bool
}

Vector 2{
	x
	y
}

Tile{
	x
	y
	piece: null or piece
}

Select Piece(tile){
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

Hard code objects for pawn, rook, knight, bishop

Illegal move detector- prevent people from moving in a way that would check the king.

Check- when the opposing player moves check to see if the king is then put in check ask all enemy pieces if they can attack the king

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