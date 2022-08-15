const express = require('express');
const app = express();
const { v4: uuidv4} = ('uuid');
const todoRouter = require('./routes/todoRouter');
const PORT = 3000;





//Middleware
app.use(express.json());
app.use('/Todos', todoRouter)







// Without this nothing happens
//Listens on port 3000
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})