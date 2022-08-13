const express = require('express');
// initializing express app
const app = express();
const userRouter = require('./routers/userRouter');

// for reading JSON data
app.use(express.json());
const port = 5000;

// to divert user request to userRouter
app.use( '/user', userRouter );

// starting the server
app.listen(port, () => {
    console.log('server started');
})