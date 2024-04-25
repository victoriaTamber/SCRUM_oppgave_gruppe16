async function games(){
    let res = await fetch("find/game/" + sessionStorage.getItem("name"), {
        method: "GET"
    })
    const game = await res.json()
    console.log(game);
    document.getElementById("code").innerHTML = game[0].lobbyCode    
    sessionStorage.setItem("code", game[0].lobbyCode)
}

async function loadPlayers(){
    let lobbyCode = sessionStorage.getItem("code")
    console.log(lobbyCode);
    let responce = await fetch("find/user/" + lobbyCode, {
        method: "GET"
    })
    const players = await responce.json()
    console.log(JSON.parse(JSON.stringify(players)));
    console.log(players.length);
    for (let i = 0; i < players.length; i++) {
        let player  = players[i]
        console.log(player);
        let name = document.createElement("h1")
        name.innerHTML = player.username
        console.log("item");
        document.getElementById("class").appendChild(name)
        
    }
}

games()

loadPlayers()