const jwt = require('jsonwebtoken');
const User = require('../models/user.js')
const Task = require('../models/task.js')

const auth = async (req, res, next) => {
    try{
    const token = req.header('authorization').replace('Bearer ','')
    const decode = jwt.verify(token, 'thisisme')
    const user = await User.findOne({_id : decode._id, 'tokens.token' : token })

    if(!user){
        throw new Error()
    }
    req.token = token
    req.user = user
     next()
    }catch(e){
        res.status(401).json({message : 'Please authenticate'})
    }
}

module.exports = auth
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZkNmJmYzY2OGYzNzFmODVkYTc1ZjMiLCJpYXQiOjE2NDM5OTgyMDR9.IK5uBMOVD-ivK8njbm62L2hBMeDLgO00if2K2Oz7z_Y