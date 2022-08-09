const express = require('express');
const app = express()
const { v4: uuidv4 } = require('uuid');
const PORT = 3000


// Middleware
app.use(express.json())




// recycled item array
let recycledItems = [
    {Name: 'Bottles',
     Description: 'Plastic or metal',
     Recyclable: 'yes',
     Quantity: 10,
     PricePerUnit: 20,
     _id: uuidv4()
    }]


// This will listen for:
//GET- http://localhost:3000/recycleditems
app.get('/recycledItems',(req, res) =>
{
    res.send(recycledItems)
})

// This will add a new recycled item
app.post('/recycledItems', (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    recycledItems.push(newItem);
    res.send(`Item ${newItem.Name} successfully added`);
})











// Without this nothing happens
//Listens on port 3000
app.listen(PORT,() => {
    console.log(`App started on port: ${PORT}`)
 })