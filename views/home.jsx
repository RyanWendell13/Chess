const React = require('react')
const Def = require('./default')

let buttons = data =>{
    let d = Object.keys(data)
    return(
        <>
            {

                d.map(k => {
                    if(k.length <= 1){
                        return(
                            <div id = 'GameDescription'>
                                <h3>{data[k].name}</h3>
                                <p>{data[k].subtitle}</p>
                                <a href={`/game/${data[k].index}`}>
                                    <button>Play</button>
                                </a>
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
            <div id='WebsiteInformation'>
                <h1>Chess-Like Games</h1>
                <p>Welcome, here are a couple of games that are like Chess, including Chess.</p>
            </div>
            <main>
                {buttons(data)}
            </main>
        </Def>
    )
}
module.exports = home