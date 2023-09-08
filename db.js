const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://asitsingh:asitsingh18@cluster0.bd8nbfz.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}