const User = require('../models/user');

async function handleGetAllUsers(req,res) {
    const allDBUsers = await User.find({});
    return  res.json(allDBUsers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({message : "User not found"});
    }
    else{
        return res.json(user);
    }
}

async function handleUpadteUserById(req,res) {
    const updateUserPut = await User.findById(req.params.id);
    if(!updateUserPut){
        return res.status(404).json({message : "Usernot found"})
    }
    else{
        const updatesData = await User.findByIdAndUpdate(req.params.id,req.body); 
        return res.json(updatesData,{message : "success"});
    }
}

async function handleDeleteUserById(req,res) {
    const deleteUser = await User.findById(req.params.id);
    if(!deleteUser){
        return res.status(404).json({message : "User not found"});
    }
    else{
        const userDeleted = await User.findByIdAndDelete(deleteUser);
        return res.json({msg : "deleted"});
    }
}

async function handleUpdateUserByIdPatch(req,res) {
    const id = req.params.id;
    const user = await User.findById(id);

    if(!user){
        return res.status(404).json({message : "User not found"});
    }
    else{
        const updateUser = await User.findByIdAndUpdate(req.params.id,{firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,gender:req.body.gender,jobTitle:req.body.jobTitle});
        return  res.json(updateUser);
    }
}

async function handleInsertData(req,res) {
    const body = req.body;
    console.log("Body : " ,body)
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({message : "All fields are required"});
    }

    const result = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        jobTitle : body.job_title

    });
    // console.log( "Result is ",result);
    return res.status(201).json({msg:"success",id : result._id});
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpadteUserById,
    handleDeleteUserById,
    handleUpdateUserByIdPatch,
    handleInsertData
}