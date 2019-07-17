const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/searchcomp')

let schema = mongoose.Schema({name: String})

let Category = mongoose.model('Category', schema)
let Description = mongoose.model('Description', schema)



const db = mongoose.connection

db.on('error', function() {
    console.error('failed to connect')
})
db.once('open', function() {
    console.log('successful connection')
})

mongoose.Promise = global.Promise;

module.exports = {
    Category,
    Description
}