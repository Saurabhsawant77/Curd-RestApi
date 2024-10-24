const express = require('express');
const {connectMongoDB} = require('./connection')
const userRouter = require('./routes/user');
const {logReqRes} = require('./middleware/index')
const port = 3000;
const app = express();


//Connection
connectMongoDB('mongodb://localhost:27017/learning-mongodb').then(()=>{
    console.log("MongoDB connected");
}).catch(() => {
    console.log("Error in COnnecting")
});

//Middleware - plugin as we are using xxx-form-urlencoded 
app.use(express.urlencoded({extended:false}));
app.use(logReqRes('log.txt'));


app.use('/api/users',userRouter);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});




