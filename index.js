const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(cors());


const connection = mysql.createConnection(
    {
        user: process.env.MYSQL_ADDON_USER,
        host: process.env.MYSQL_ADDON_HOST,
        password: process.env.MYSQL_ADDON_PASSWORDroot,
        database:process.env.MYSQL_ADDON_DB,
    }
)

app.post('/form' , (req,res) => {
    const Name = req.body.username;
    const email = req.body.email;
    const PhoneNumber =req.body.PhoneNumber;
    const password = req.body.password;
    const Batch = req.body.Batch;
    
    connection.query("INSERT INTO customers (Name , email,PhoneNumber, password ,Batch) VALUES (?,?,?,?,?)" , 
    [Name , email, PhoneNumber,password ,Batch] ,
    (err,result1) =>{
    if(result){
        return res.send(result);
    }
    else
    {
        return res.send({message : err});
    }
    
     })
    
})
app.listen(process.env.PORT,function (err){
    console.log('App Listening at PORT 8000');
})
