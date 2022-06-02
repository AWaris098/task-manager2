require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndDelete("6115584559f9d80dfbcdcac1").then((task) =>{
//     console.log(task)
//     return User.countDocuments()
// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })

const updateAgeAndCount = async (id, age)=> {
     
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
         return count

}
     updateAgeAndCount("611809e03424160b12bd260f", 3).then((count) =>{
         console.log(count)
     }).catch((e) => {
         console.log(e)
     })