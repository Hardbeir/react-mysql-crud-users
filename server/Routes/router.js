const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");


//registration users

router.post("/create", (req, ser)=>{

   /*  console.log(req.body); */

const {name, subname, email} = req.body;

if(!name || !subname || !email){
    res.status(422).json("fill the all data")
}

try{
    conn.query("SELECT * FROM users WHERE email = ?", email,(err,result)=>{
        if(result.length){
            res.status(422).json("Data is Already")
        } else{
            conn.query("INSERT INTO users SET ?",{name, subname, email},(err,result)=>{
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

});

// get users 

router.get("/getusers",(req,res)=>{
    conn.query("SELECT * FROM users",(err, result) =>{
        if(err){
            res.status(422).json("available data");
        } else{
            res.status(201).json(result);
        }
    })
});


//deleted user
router.delete("/deleteuser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("DELETE FROM users WHERE id = ?", id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});

//get insert user

router.get("/insertuser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("SELECT * FROM users WHERE id = ?", id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    });
})


module.exports = router;

