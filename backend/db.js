const mongoose=require('mongoose')
const mongoURI='mongodb://Dhairyash:pass1234@ac-hlgoe7s-shard-00-00.usskidt.mongodb.net:27017,ac-hlgoe7s-shard-00-01.usskidt.mongodb.net:27017,ac-hlgoe7s-shard-00-02.usskidt.mongodb.net:27017/Invictus\'2024?ssl=true&replicaSet=atlas-akf5yl-shard-0&authSource=admin&retryWrites=true&w=majority'

const connectToMongo=async ()=>{
    try {
        mongoose.set("strictQuery", false);
        console.log("Connecting")
        mongoose.connection.on('connected', () => console.log('connected'));
        mongoose.connection.on('open', () => console.log('open'));
        mongoose.connection.on('disconnected', () => console.log('disconnected'));
        mongoose.connection.on('reconnected', () => console.log('reconnected'));
        mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
        mongoose.connection.on('close', () => console.log('close'));
        var connection=mongoose.connection
        connection.once('open', async()=>{
          // console.log("yyyyyyy")
          const items  =connection.db.collection("internships");
        //   const category  =connection.db.collection("food_category");
        //   global.food_items=await items.find({}).toArray()
          global.internship=await items.find({}).toArray()
        //   console.log(global.internship)
          
        })
        await mongoose.connect(mongoURI)
      } catch (error) {
        console.log(error);
      }
}
module.exports=connectToMongo;