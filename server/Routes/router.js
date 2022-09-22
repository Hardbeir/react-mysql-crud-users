const express = require("express");
const router = new express.Router();
const conn = require("./db/conn");

router.post("/create",(req,ser)=>{

    console.log(req.body);

})

module.exports = router;