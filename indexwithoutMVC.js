const express = require('express');
const {connectMongoDB} = require('./connection')
const port = 3000;
const app = express();
const userRouter = require('./routes/user');
const {logReqRes} = require('./middleware/index')
// const fs = require('fs');
// const { type } = require('os');
// const users = require("./MOCK_DATA.json");
// const mongoose = require('mongoose');


//Connection


connectMongoDB('mongodb://localhost:27017/learning-mongodb');
// mongoose.connect('mongodb://localhost:27017/learning-mongodb')
// .then(() =>{
//     console.log("Mongodb Connected")
// })
// .catch((err) =>{[
//     console.log("Error in connecting " , err)
// ]})


//Schema

// const userSchema = new mongoose.Schema({
//     firstName:{
//         type:String,
//         required:true
//     },
//     lastName :{
//         type:String,
//         required:false
//     },
//     email :{
//         type:String,
//         required:true,
//         unique:true
//     },
//     jobTitle :{
//         type:String,

//     },
//     gender:{
//         type:String,
//     }
// },{timestamps:true})

// const User = mongoose.model("user",userSchema);

//Middleware - plugin as we are using xxx-form-urlencoded 
app.use(express.urlencoded({extended:false}));
app.use(logReqRes('log.txt'));


// app.get('/users',async (req,res)=>{
//     const allDBUsers = await User.find({});
//     const html = `
//     <ul>
//     ${allDBUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join('')}
//     </ul>
//     `
//      res.send(html);
// })

// app.get('/api/users',async (req,res)=>{
//     const allDBUsers = await User.find({});
//     // res.setHeader("my-name" , "Saurabh Sawant");
//     return  res.json(allDBUsers);
// })

// app.route('/api/users/:id').get(async (req,res) =>{
//     // const id = Number (req.params.id);
//     // const user = users.find((user) => user.id === id);
//     const user = await User.findById(req.params.id);
//     if(!user){
//         return res.status(404).json({message : "User not found"});
//     }
//     else{
//         return res.json(user);
//     }
//     // if(user ==  null){
//     //     return res.status(404).json({message : "User not found"});
//     // }
//     // console.log(user)
//     // const html = `
//     // <ul>
//     // <li>${user.first_name}</li>
//     // <li>${user.last_name}</li>
//     // <li>${user.email}</li>
//     // <li>${user.job_title} </li>
//     // </ul>
//     // `
//     // return res.send(html);

// })
// .put(async (req,res) =>{
//     //Todo : Edit user with id
//     // const id = Number (req.params.id);
//     // const user = users.find((user) => user.id === id);
//     // user.first_name = req.body.first_name || user.first_name;
//     // user.last_name = req.body.last_name || user.last_name;
//     // user.email = req.body.email || user.email;
//     // user.job_title = req.body.job_title || user.job_title;

//     // return res.json(user);

//     const updateUserPut = await User.find
//     })
// .delete(async (req,res) =>{
//     //Todo : Delete  user
//     // const id = (req.params.id);
//     // const user = users.find((user) => user.id === id);
//     // const index = users.indexOf(user);

//     // users.splice(index,1);
//     // users.pop(user);
//     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data) =>{
//     //     return res.json({status:"success", id : users.length});
//     // });
//     // return res.json(users);

//     const deleteUser = await User.findById(req.params.id);
//     if(!deleteUser){
//         return res.status(404).json({message : "User not found"});
//     }
//     else{
//         const userDeleted = await User.findByIdAndDelete(deleteUser);
//         return res.json({msg : "deleted"});
//     }
// })
// .patch(async (req,res) => {
//     const id = req.params.id;
//     const user = await User.findById(id);

//     if(!user){
//         return res.status(404).json({message : "User not found"});
//     }
//     else{
//         const updateUser = await User.findByIdAndUpdate(req.params.id,{firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,gender:req.body.gender,jobTitle:req.body.jobTitle});
//         return  res.json(updateUser);
//     }
// })



// // app.get('/api/users/:id',(req,res) =>{
// //     const id = Number (req.params.id);
// //     const user = users.find((user) => user.id === id);
// //     console.log(user)
// //     const html = `
// //     <ul>
// //     <li>${user.first_name}</li>
// //     <li>${user.last_name}</li>
// //     <li>${user.email}</li>
// //     <li>${user.job_title} </li>
// //     </ul>
// //     `
// //     return res.send(html);

// // })




// app.post('/api/users/',async (req,res)=>{
//     //Todo : Create new user
//     const body = req.body;
//     console.log("Body : " ,body)
//     if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
//         return res.status(400).json({message : "All fields are required"});
//     }

//     const result = await User.create({
//         firstName : body.first_name,
//         lastName : body.last_name,
//         email : body.email,
//         gender : body.gender,
//         jobTitle : body.job_title

//     });
//     // console.log( "Result is ",result);
//     return res.status(201).json({msg:"success"});
//     // {
//     //     email : body.email,
//     //     first_name : body.first_name,
//     //     last_name : body.last_name,
//     //     gender:body.gender,
//     //     job_title:body.job_title,
//     //     id:users.length+1
//     // }
//     // users.push({...body, id:users.length+1});
//     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data) =>{
//     //     return res.json({status:"success", id : users.length});
//     // });
// });


// app.put('/api/users/:id',(req,res)=>{
//     //Todo : Update user
// })
// app.delete('/api/users/:id',(req,res)=>{
//     //Todo : Delete user

// })


app.use('/user',userRouter);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});




