const express = require("express");
const router = new express.Router();
const conn = require("./db/conn");

router.post("/create",(req,ser)=>{

/*     console.log(req.body); */

const {name, subname, email} = req.body;

if(name || !subname || !email){
    res.status(422).json("fill the all data")
}

try{
    conn.query("SELECT * FROM users WHERE email = ?", email,(err,result)=>{
        if(result.length){
            res.status(422).json("Data is Already")
        } else{
            conn.query("INSERT INTO users SET ?",{name,subname,email},(err,result)=>{
                if(err){
                    console.log("err" + err);
                }else{
                    res.status(201).json(req,body);
                }
            })
        }
    })
} catch(error){
    res.status(422).json("fill the all data");
}

})

module.exports = router;

