// TODO: - use SQLite3 for lite database
const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://asitsingh:ASc8P7i044jXYa8U@cluster3.ha4sqst.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}