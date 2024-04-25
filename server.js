// laster inn all node.js modulene
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
// definerer porten jeg skal bruke
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on this port: ${PORT}`));
const mysql = require('mysql2');
const md5 = require('md5')
// test databasen
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'wolfstein'
});

// connecter til databasen
connection.connect();
// andre nødvendige kommandoer
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const path = require("path");
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/client/index.html"))
})

app.get('/find/game/:a', (req, res) => {
    connection.query(`SELECT * FROM lobbies WHERE host = "${req.params.a}" `, function (err, result, fields) {
        let data = JSON.parse(JSON.stringify(result))
        res.send(data)
    })
});

app.get('/find/user/:a', (req, res) => {
    let string = `SELECT * FROM user WHERE lobby = "${req.params.a}" `
    connection.query(string, function (err, result, fields) {
        let data = JSON.parse(JSON.stringify(result))
        res.send(data)
    })
});
app.post("/createLan", function (req, res) {
    // skaffer user og passord fra data-en og gir dem en verdi
    let username = req.body.name
    let currentdate = new Date()
    let date = currentdate.getTime() + "/" + currentdate.getDate() + "/"  + currentdate.getMonth()
    let code = md5(date)
    connection.query(`INSERT INTO lobbies (lobbyCode, type, host) VALUES ('${code}', "lan", "${username}")`)
});
app.post("/register", function (req, res) {
    // skaffer user og passord fra data-en og gir dem en verdi
    let code = req.body.code
    let username = req.body.username
    let number = req.body.number
    let email = req.body.email
    console.log(username, number, email);
    connection.query(`INSERT INTO user (username, phone, email, lobby) VALUES ("${username}", "${number}", "${email}", "${code}")`)
});



app.use(express.static("client"))