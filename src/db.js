const mongo = require("./mongo")
const userSchema = require('./schema/user_Schema')

const connectToMongoDB = async() => {
    await mongo().then(async(mongoose) => {
        try
        {
            console.log('Connect to mogoDB!')

            const users ={
                username: 'admin',
                password: 'admin'
            }
            await new userSchema(users).save()
        }
        finally
        {
            mongoose.connection.close()
        }
    })
}

connectToMongoDB()