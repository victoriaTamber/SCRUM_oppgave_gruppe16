// document.getElementsByClassName("link")[0].addEventListener("click", () => {
//     const data = {
//         name: sessionStorage.getItem("name")
//     }
//     fetch("/createLan", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     window.location.assign("./lansettings.html")
// })

document.getElementById("view").addEventListener("click", () => {
    show("view")
})
document.getElementById("join").addEventListener("click", () => {
    show("join")
})
document.getElementById("Tournament").addEventListener("click", () => {
    show("Tournament")
})

document.getElementById("lan").addEventListener("click", () => {
    show("lan")
})

function show(key) {

    document.getElementById(key + "Input").style.display = "block"
    document.getElementById(key + "Submit").style.display = "block"
}

document.getElementById("join").addEventListener("submit", () => {
    sessionStorage.setItem("code", document.getElementById("joinInput").value)
})