//database connection

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ems',()=>{
    console.log('Mongodb connection established');
})

//schema creation 

const employee = mongoose.model('Employee',{
    id:String,
    empname:String,
    age:String,
    designation:String,
    salary:String,

})

module.exports = { employee
}