const express = require("express")
const mongoose =require("mongoose")
const cors = require("cors")
const {busmodel} = require("./models/bus")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sree:sree2002@cluster0.n63e6.mongodb.net/busdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/adduser",(req,res)=>{{
    let input = req.body
    let bus = new busmodel(input)
    bus.save()
    res.json({"status":"success"})
}})


app.post("/addbus",(req,res)=>{{
    let input = req.body
    let bus = new busmodel(input)
    bus.save()
    res.json({"status":"success"})
}})

app.get("/view",(req,res)=>{
    busmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json("error")
        }
    )
})

app.post("/search",(req,res)=>{
    let input = req.body
    busmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json("error")
        }
    )
})

app.post("/delete",(req,res)=>{
    let input = req.body
    busmodel.findByIdAndDelete(input).then(
        (data)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (data)=>{
            res.json({"status":"failed"})
        }
    )
})







app.listen(8080,()=>{
    console.log("server started")
})