const React = require('react')


function game (data) {
    let gameSetup = data => {
        return(
            <div>
                <div  id='GameButtons'>
                    <a href='/'>
                        <button>back</button>
                    </a>
                    <button id="Restart" onclick="NewGame()">
                        <img src="/images/ReloadIcon.png" alt="Restart Button"/>
                    </button>
                </div>

                <h1 id="PlayerTwoText">Player Two</h1>

                <div id="Board">
                    <div id="WinPopup">
                        <h1 id="WinText">Player One Won</h1>
                        <button id = 'NewGameButton'onclick="NewGame()">New Game</button>
                    </div>
                </div>

                <h1 id="PlayerOneText">Player One</h1>


                <div id="Guide">
                <h1>Guide</h1>
                    <div id="Gameplay">
                        {data.instructions.map(i => {
                            return(
                                <p>{i}</p>
                            )
                        })}
                    </div>
                    <div id="Pieces">
                        <h2>Pieces</h2>
                        <div id="Images">
                            {data.pieces.map(p => {
                                return(
                                    <div>
                                        <h4>{p.name}</h4>
                                        {p.images.map(i => {
                                        return(
                                            <img src={i} alt={p.name} style={{width: '100%', height: '100%'}}></img>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div id="Tiles">
                        <h2>Tile Colors</h2>
                        <div id="TileImages">
                            {data.tiles.map(t => {
                                return(
                                    <div>
                                        <h4>{t.name}</h4>
                                        <div id='TileColor' style={{backgroundColor: t.color}}></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div id="Issues" style={data.issues.length > 0 ? {} : { display: 'none' }} >
                        <h2>Issues</h2>
                        {data.issues.map(i => {
                            return(
                                <p>{i}</p>
                            )
                        })}
                    </div>
                    
                    
                    
                </div>
            </div>
        )
    }
    return(
        <html>
            <head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>{data.name}</title>
                <link rel="stylesheet" href="/style.css"/>
            </head>
            <body>
                {gameSetup(data)}
            </body>
            <script src='/js/common/Board.js'></script>
            <script src="/js/common/PieceInfo.js"></script>
            <script src="/js/common/Move.js"></script>
            <script src="/js/common/Vector2.js"></script>
            <script src="/js/common/Tile.js"></script>
            <script src="/js/common/Piece.js"></script>
            <script src="/js/common/Game.js"></script>
            <script src={data.script}></script>
        </html>
    )
}
module.exports = game