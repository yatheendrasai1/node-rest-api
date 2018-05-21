const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true},function(err,db){
  if(err){
    return 'Error Occured...unable to create a connection';
  }
  // console.log('connection established...');
  //
  // db.collection('Todos').insertOne({
  //   text:'this one is completed',
  //   completed: true
  // },function(err,result){
  //   if(err){
  //     return 'Error Occured...unable to create a Todo';
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Yatheendra Sai',
  //   age: 21,
  //   location: 'Hyderabad'
  // },function(err,result){
  //   if(err){
  //     return 'Error Occured...unable to create User';
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Todos').find().count({'completed':false}).then(function(todos){
    console.log('Todo List\n',todos);
  });


  db.close();
});
