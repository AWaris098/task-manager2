// require('../src/db/mongoose')
// const Task = require('../src/models/task')

// Task.findByIdAndDelete('6115584559f9d80dfbcdcac1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed : false})
// }).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed : false })
    return count
}

  deleteTaskAndCount("6115584559f9d80dfbcdcac2").then((result) => {
      console.log(result)
  }).catch((e) => {
      console.log(e)
  })