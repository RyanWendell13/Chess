
exports.__esModule = true

let games = [{
    index: 0,
    name: 'Chess',
    subtitle: 'The Classic',

    instructions: [
        `Above and below the board are two boxes saying "Player One" and "Player Two". These show whose turn it is. When a box has a black border around it that means it's that players turn.`,
        `Simply click on a piece to move. It will highlight all possible moves the piece can make. Click on one of the highlighted tiles to move to it.`,
        `When a king is in check a blue line from the checking piece to the king will be created.`],

    pieces: [{name:'Pawn',images:['/images/Pawn.png']},
        {name:'Rook',images:['/images/Rook.png']},
        {name:'Knight',images:['/images/Knight.png', '/images/KnightVariation.png']},
        {name:'Bishop',images:['/images/Bishop.png']},
        {name:'Queen',images:['/images/Queen.png']},
        {name:'King',images:['/images/King.png']}],

    tiles: [{name:'Possible Move',color:'Yellow'},{name:'Possible Attack',color:'Red'},{name: 'Part Of The Check Path',color:'Blue'}],

    issues: [`The King can take a piece even if it is protected by another piece. For example a Queen puts the King in check with a Bishop able to move to the Queens tile. The King should be Checkmated, but instead the King can take the Queen.`,
        `The ability to Castling hasn't been added.`,
        `The ability to En Passant hasn't been added.`],

    script: '/js/Chess.js'
    

},{
    index: 1,
    name: 'Latrunculi',
    subtitle: 'Roman Chess',
    
    instructions: [
        `Above and below the board are two boxes saying "Player One" and "Player Two". These show whose turn it is. When a box has a black border around it that means it's that players turn.`,
        `Simply click on a piece to move. It will highlight all possible moves the piece can make. Click on one of the highlighted tiles to move to it.`,
        `Corners do not count as adjecent tiles.`,
        `To take a Pawn you must surround it with to other pawns, in a line. If a pawn is in the corner it can be taken by putting two pawns in the adjacent tiles. Outside of this the walls cannot be used to capture pawns. The Dux can be used to capture Pieces.`,
        `Capturing the Dux is one way to win the game. To capture the Dux it  must be surronded on all four adjacent tiles.`],

    pieces: [{name:'Pawn',images:['/images/Pawn.png']},
        {name:'Dux',images:['/images/Dux.png', '/images/DuxVariation.png']}],

    tiles: [{name:'Possible Move',color:'Yellow'},{name:'Cannot Use Again',color:'Blue'}],

    issues: [],

    script: '/js/Latrunculi.js'
}]


exports.games = games;
