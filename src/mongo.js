const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://SeAdmin:admin@se-helloworld.2m4ar.mongodb.net/Inventory?retryWrites=true&w=majority'

module.exports = async() => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    return mongoose
}