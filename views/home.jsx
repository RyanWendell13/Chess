const React = require('react')
const Def = require('./default')

let buttons = (games, categories) =>{
    return(
        <>
            {
                categories.map(c => {
                    if (c.name == 'none'){
                        return(
                            c.ids.map(i => {
                                return(
                                    <div id = 'Chunk'>
                                        <h3>{games[i].name}</h3>
                                        <p>{games[i].subtitle}</p>
                                        <a href={`/game/${games[i].index}`}>
                                            <button>Play</button>
                                        </a>
                                    </div>
                                )
                            })
                        )
                    }
                    else {
                        return(
                            <div id = 'Chunk'>
                                <h2>{c.name}</h2>
                                <p>{c.description}</p>
                                {c.ids.map(i => {
                                    return(
                                        <div id='SubChunk'>
                                            <h3>{games[i].name}</h3>
                                            <p>{games[i].subtitle}</p>
                                            <a href={`/game/${games[i].index}`}>
                                                <button>Play</button>
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

function home (data) {
    return (
        <Def>
            <main>
                <div id='WebsiteInformation'>
                    <h1>Chess-Like Games</h1>
                    <p>Welcome, here are a couple of games that are like Chess, including Chess.</p>
                </div>
                {buttons(data.games,data.categories)}
            </main>
        </Def>
    )
}
module.exports = home