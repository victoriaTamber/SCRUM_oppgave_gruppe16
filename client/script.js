async function register() {

}
document.getElementsByClassName("registrationForm")[0].addEventListener("submit", async (e) => {
    // sets user and password the user inputs

    const data = {
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
})