const {MongoClient} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if(err){
      return console.log(err);
    }
    db.collection('Users').findOneAndUpdate({name:'Yatheendra Sai',age:22},
      {
        $set:{
            name:"Yatheendra Sai"
        },
        $inc:{
            age:-1
        }
      },
      {
        returnOriginal:true
      },
    ).then(function(docs){
      console.log(docs);
    });
});
