const express = require('express')
const path = require('path')
const parser = require('body-parser')


const app = express()
const port = 3000;

app.use(parser.json()) // converts to json
app.use(parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get("/api", (req, res) => {
    res.status(200).send(data)
})


app.listen(port, () => console.log(`listening on port ${port}`))
