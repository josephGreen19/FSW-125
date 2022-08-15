const express = require('express');
const todoRouter = express.Router();
const { v4: uuidv4 } = require('uuid')
const router = express.Router();




let Todos = [
    {
        name: "Do the laundry",
        description: "Wash and dry clothes",
        imageUrl: "https://images.unsplash.com/photo-1580175486077-959357d7c72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        timesWeek: "Once a week",
        cost: "check water Bill",
        _id: uuidv4() 
    },
    {
        name: "Do the dishes",
        description: "Wash, dry, put dishes away",
        imageUrl: "https://images.unsplash.com/photo-1581622558638-818128465982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlydHklMjBkaXNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        timesWeek: "Twice a day",
        cost: "check water bill",
        _id: uuidv4() 
    },
    {
        name: "Take out the garbage",
        description: "Bring garbage to the side of the road",
        imageUrl: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyYmFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        timesWeek: "Once a week",
        cost: "10",
        _id: uuidv4() 
    },
    {
        name: "Take out the dog",
        description: "Wash and dry clothes",
        imageUrl: "https://images.unsplash.com/photo-1613043830623-6e5c5079e4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmlyZWh5ZHJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        timesWeek: "As needed",
        cost: "no cost",
        _id: uuidv4() 
    }
]


// Get-All
// This will listen for:
//GET- http://localhost:3000/Todos
todoRouter.get('/', (req, res) => {
    res.send(Todos)
})

    
// //Get one by Id
todoRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const oneItem = Todos.find(item => item._id === itemId);
    console.log(oneItem)
    res.send(oneItem);
})
// // This will add a new todo item
todoRouter.post('/', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    Todos.push(newItem);
    res.send(`Item successfully added`);
})
// // This deletes one item based on id
todoRouter.delete('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const toDoIndex = Todos.findIndex(item => item._id === itemId);
    Todos.splice(toDoIndex, 1);
    res.send("Item has been deleted")
})
// //this updates one item based on id
todoRouter.put('/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const toDoIndex = Todos.findIndex(item => item._id === itemId);
    const updateList = Object.assign(Todos[toDoIndex], req.body);

    res.send('Item successfully updated');

})



module.exports = todoRouter;