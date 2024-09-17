var mongodb = require('mongodb')
async function loginDAO(data) {
    try{
        console.log(3);
        //connect with DB
        var url= "mongodb+srv://nit:nit@7am-cluster.z4xoy.mongodb.net/"
        var mongoclient = mongodb.MongoClient
        const server = await mongoclient.connect(url)
        var db = server.db('7am')
        var collection = db.collection('admin')
        var result = await collection.find(data).toArray()
        console.log(4);

        return result;
 
    } catch (ex) {
    
    }finally{

    }
}




module.exports=loginDAO