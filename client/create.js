document.getElementsByClassName("link")[0].addEventListener("submit", (e) => {
    e.preventDefault()
    let name = document.getElementById("lanInput").value
    sessionStorage.setItem("name", name)
    const data = {
        name:  name
    }
    fetch("/createLan", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    window.location.assign("./lansettings.html")
})

document.getElementById("view").addEventListener("click", () => {
    show("view")
})
let count = 0
document.getElementById("join").addEventListener("click", () => {
    document.getElementsByClassName("registrationForm")[0].style.display = "block"
    document.getElementsByClassName("registrationForm")[0].addEventListener("submit", async (e) => {
        // sets user and password the user inputs
        
        if (count > 0){
            return
        }
        const data = {
            code: document.getElementById("code").value,
            username: document.getElementById("username").value,
            number: document.getElementById("number").value,
            email: document.getElementById("email").value
        }
        console.log(data);
        // sends the data to the database
        fetch("/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert("success")
        count ++
    })
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
document.getElementById("view").addEventListener("submit", (e) => {
    console.log("item");
    e.preventDefault()
    let name = document.getElementById("viewInput").value
    sessionStorage.setItem("name", name)
    window.location.assign("lansettings.html")
})