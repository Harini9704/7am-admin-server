var mongodb = require('mongodb')
async function loginDAO(data) {
  try{
    //connect with DB
 var url= "mongodb+srv://nit:<db_password>@7am-cluster.z4xoy.mongodb.net/"
var mongoclient = mongodb.MongoClient
const server = await mongoclient.connect(url)
var db = server.db('7am')
var collection = db.collection('admin')
//server - install db s/w - run - databases - collections - documents
//server - install db s/w - run - databases - table - rows 
  } catch (ex) {
    
  }finally{

  }
}




module.exports=loginS