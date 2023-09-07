const express = require('express')

const cors = require('cors')

const logic = require('./services/logic')

//server creation
const server = express()

server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.listen(7000,()=>{
    console.log('listening on the port 7000');
})

//get all employee api

server.get('/allEmployees',(req,res)=>{
    logic.allEmployees().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteEmployee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getEmployee/:id',(req,res)=>{
    logic.getAnEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


server.post('/updateEmployee',(req,res)=>{
    logic.updateAnEmployee(req.body.id,req.body.empname,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
