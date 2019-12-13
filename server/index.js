const http = require('http')
const express = require('express')

const app = express()
const port = 8080 

app.get('/', (req, res) => {
    http.get('http://192.168.0.164', (resp) =>{
        var data = [];
        resp.on('data', (chunk) => {
            data.push(chunk);
        }).on('end', () => {
            res.send('The dingles of Gerry have been rung')
        })
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    })
})

app.listen(port, () => console.log(`Gerrybell gatekeeper listening on port ${port}!`))
