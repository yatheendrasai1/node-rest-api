const mongoose =require('mongoose');

var todo=mongoose.model('Todo',{
  todo:{
    type: String,
    required: true,
    minlength:1,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default:null
  }
});

module.exports={todo}
