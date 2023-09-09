const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://asitsingh:Asitsingh18@cluster0.fp7jnn2.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}