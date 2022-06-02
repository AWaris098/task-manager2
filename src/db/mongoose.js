const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/task-manager-api' , {
    // useNewUrlParser : true,
    // useCreatIndex : true
})

// const User = mongoose.model('User1', {
//     name: {
//         type : String,
//         required : true,
//         trim : true
//     },
//     email:{
//         type : String,
//         required : true,
//         trim : true,
//         lowercase : true,
//         validate(value){
//              if(!validator.isEmail(value)){
//                  throw new Error('Email is invalid')
//              }
//         }
//     },
//     password : {
//          type : String,
//          trim : true,
//         minlength : 7,
//          validate(value){
//              if(value.toLowerCase().includes('password')){
//                  throw new Error('Password can not contain "password"')
//              }
//          }
//     },
//     age : {
//         type : Number,
//         default : 0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
    
// })

// const me = new User({
//     name : '  Ab.waris   ',
//     email : '   WARISNIZ02@GMAIL.COM',
//     password : 'Password123'
// })

// me.save().then ((result) => {
//     console.log(result)
// }).catch ((e) => {
//     console.log(e)
// })



// const Task = mongoose.model('Task1',{
//     description:{
//         type : String,
//         required : true,
//         trim : true
//     },
//       completed :{
//           type : Boolean,
//           default : false
//       }
// })


// const task = new Task({
//     description : '  Eat lunch'
// })

// task.save().then((result) => {
//     // r
// }).catch((error) => {
//     console.log(error)
// })
