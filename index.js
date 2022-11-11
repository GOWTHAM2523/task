const express = require('express');
const cors = require('cors');
const mycon = require('mysql');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    user : "root",
    password : "2523",
    database : "ecom"
})

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('Database Connected');}
})

app.post('/Signup',(req,res)=>{
    let role = req.body.role;
    let name = req.body.name;
    let email =req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    let branch =req.body.branch;
    let password = req.body.password;

    let sql = 'insert into signup(username,password,name,email,phone,address,branch,role,status)values(?,?,?,?,?,?,?,?,?)';

    c.query(sql,[email,password,name,email,phone,address,branch,role,0],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            res.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            res.send(s);
        }
    })

})

app.post('/Signin',(request,response)=>{
    let username = request.body.username;
    let password = request.body.password;

    let sql = 'select * from signup where username=?';

    c.query(sql,[username],(error,result)=>{
        if(error){
            let s = {"status":"query_error"};
            response.send(s);
        }
        else if(result.length > 0){
            let username1 = result[0].username;
            let password1 = result[0].password;
            let id = result[0].id;
            let role = result[0].role;

            if(username1 === username && password1 === password){
                let s = {"status":"Success","id":id,"role":role};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid_data"};
                response.send(s);
            }
        }
        else{
            let s = {"status":"error"};
            response.send(s);
        }
    })

})

app.post('/userdetails',(request,response)=>{
    let userid = request.body.userid;

    let sql = 'select * from signup where id=?';

    c.query(sql,[userid],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let name = result[0].name;
            let s = {"status":name};
            response.send(s);
        }
    })
})

app.post('/category_insert',(request,response)=>{
    let {category_name,category} = request.body;

    let sql = 'insert into category(category_name,category,status)values(?,?,?)';

    c.query(sql,[category_name,category,0],(err,result)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })
})

app.listen(3004);