const express = require("express")
const {connection} = require("./db")

const {UserModel} = require("./model/User.Model")
const fetch = require("fetch").fetchUrl
const app = express();
app.use(express.json());



 function getData(){

 fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole",function(error, meta, body){

const decodedJsonObject = Buffer.from(body,'base64').toString('ascii'); 
const user= JSON.parse(decodedJsonObject)
// console.log(user);

for(let i=0;i<user.length;i++){
    // console.log(user[i]['email']);
    const saveUsers = new UserModel({
        first:user[i]['first'],
        last:user[i]['last'],
        email: user[i]['email'],
         address: user[i]['address'],  
         created: user[i]['created'],  
         balance: user[i]['balance'],  
    })
 saveUsers.save();

}

});
}

app.post('/postusers',async(req,res)=>{
const users=getData();
res.status(201).json({
    success:true,
    users
})

})


app.get('/getusers',async(req,res)=>{
 
    const users=await UserModel.find({});


    res.status(200).json({
      success:true,
      users
    })
});

app.delete('/removeusers',async(req,res)=>{
    await UserModel.deleteMany();
    res.status(200).json({
        success:true,
        message:"Deleted Entries"
    })
})






app.listen(4000,async()=>{
    try{
    await connection
    console.log("Connected to DB successfully");
    }
    catch(err){
    console.log("Error connectiong to DB");
    console.log(err);
    }
        console.log("Listening on PORT 4000");
    });

