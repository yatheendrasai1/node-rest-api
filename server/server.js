var express=require('express');
var bodyparser=require('body-parser');

var {mongoose} = require('./db/mongo');
var {todo}=require('./models/todo');
var {user}=require('./models/user');

var app=express();

app.use(bodyparser.json());
app.post('/todos',(req,res )=>{
    var todos=new todo({
      todo:req.body.todo
    });

    todos.save().then((doc)=>{
      res.send(doc);
    },(e)=>{
      res.status(400).send(e);
    });
});

app.get('/todos',(req,res)=>{

    todo.find().then((doc)=>{
       res.send({doc});
    },(err)=>{
        res.status(400).send(err);
    });
});

app.listen(3000,()=>{
  console.log('listening on port 3000');
})
