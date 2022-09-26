require("dotenv").config();
const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")   //cross-origin Resource Sharing
require("./db/conn")
const router = require("./Routes/router")

const port = 3001;

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, ()=>{
    console.log("server starts at port:" + port)
})