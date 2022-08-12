const express = require('express');
const app = express()
const { v4: uuid } = require('uuid');
const PORT = 3000
const recycledItemsRoute= require ('./routes/recycledItems')


// Middleware
app.use(express.json())
app.use('/recycledItems', recycledItemsRoute)

// app.use('/', routes);
// app.use(app.router);
// routes.initialize(app);







// Without this nothing happens
//Listens on port 3000
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})