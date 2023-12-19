const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(cors());


const connection = mysql.createConnection(
    {
        USER: "root",
        HODT: "localhost",
        PASSWORD: "root",
        DATABASE:"yoga",
    }
)

app.post('/form' , (req,res) => {
    const Name = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phone =req.body.PhoneNumber;
    const Batch = req.body.Batch;
    
    connection.query("INSERT INTO customers (Name , email,phone , password ,Batch) VALUES (?,?,?,?,?)" , 
    [Name , email, phone,password ,Batch] ,
    (err,result1) =>{
    if(result1){
    if(Batch === '1')
    {
        connection.query("INSERT INTO batch1 ( email,Batch) VALUES (?,?)" , 
            [ email ,Batch] ,
            (err,result) =>{
             if(result){
             var res1 = {result1:result1 ,
                          result:result}
             return res.send(res1);
             }
             else{
                return res.send({message : err});
            }
        })
    }
    else if (Batch === '2'){
        connection.query("INSERT INTO batch2 ( email,Batch) VALUES (?,?)" , 
            [ email ,Batch] ,
            (err,result) =>{
                if(result){
                    var res2 = {result1:result1 ,
                                 result:result}
                    return res.send(res2);
                    }
                    else{
                       return res.send({message : err});
                   }
        })
    }else if (Batch === '3'){
        connection.query("INSERT INTO batch3 ( email,Batch) VALUES (?,?)" , 
            [ email ,Batch] ,
            (err,result) =>{
                if(result){
                    var res3 = {result1:result1 ,
                                 result:result}
                    return res.send(res3);
                    }
                    else{
                       return res.send({message : err});
                   }
        })
    }
    else if (Batch === '4'){
        connection.query("INSERT INTO batch4 ( email,Batch) VALUES (?,?)" , 
            [ email ,Batch] ,
            (err,result) =>{
                if(result){
                    var res4 = {result1:result1 ,
                                 result:result}
                    return res.send(res4);
                    }
                    else{
                       return res.send({message : err});
                   }
        })
    }
    
     }
 })
    
    

})
app.listen(PORT,function (err){
    console.log('App Listening at PORT 8000');
})