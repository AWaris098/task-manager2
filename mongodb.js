// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{
//     if(error){
//         return console.log('Unable to connect your database')
//     }

//     const db = client.db(databaseName)
    
//     db.collection('users').insertOne({
//         name : 'Abdul Waris',
//         age : 21
//     },(error,result) => {
//         if(error){
//             return console.log('Unable to connect user')
//         }
//         console.log(result.ops)
//     })

//     db.collection('users').insertMany([
//         {
//         name : 'Fazil',
//         age : 32
//     },
//     {
//         name : 'Adil',
//         age : 30
//     },
//     {
//         name : 'Aaqil',
//         age : 24
//     }
//     ],(error,result)=>{
//         if(error){
//             return console.log('Unable to connect users')
//         }
//         console.log(result.ops)
//     })

//     db.collection('tasks').insertMany([
//         {
//             description : "I had open Laptop",
//             completed : true
//         },
//         {
//             description : "Today I went t.jam",
//             completed : false
//         },
//         {
//             description : "I have complete node js course",
//             completed : false
//         }
//     ],(error,result)=>{
//         if(error){
//             return console.log('Unable to connect tasks')
//         }
//         console.log(result.ops)
//     })


// db.collection('users').deleteMany({
//     age : 23
// }).then((result) => {
//     console.log(result)
// }).catch ((e) => {
//     console.log(e)
// })

// db.collection('tasks').deleteOne({
//     description : 'Today I have done enough work'
// }).then((result) => {
//     console.log(result)
// }).catch ((e) => {
//     console.log(e)
// })
// })