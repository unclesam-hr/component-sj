const express = require('express')
const path = require('path')
const parser = require('body-parser')
const cors = require('cors')
const model = require('../database/index');
const dbHelpers = require('../database/dbHelpers.js');


const app = express()
const port = 3001;

app.use(parser.json()) // converts to json
app.use(parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get("/api/search", cors(), (req, res) => {

    Promise.all([dbHelpers.getAllCategories(), dbHelpers.getAllDesc()])
        .then((result) => {
            var catResult = result[0]
            var descResult = result[1]
            var x = Math.floor(Math.random() * (catResult.length - 1))
            var y = Math.floor(Math.random() * (catResult.length - 1))
            var z = Math.floor(Math.random() * (catResult.length - 1))

            
            
            res.send([catResult[x].name, catResult[y].name, catResult[z].name ,descResult[x].name, descResult[y].name, descResult[z].name])
        })

})


app.listen(port, () => console.log(`listening on port ${port}`))
