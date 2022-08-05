const express = require('express');
const app = express()
const PORT = 3000

// Three different arrays 
let football = [
    {team: 'Bills', city: 'Buffalo'},
    {team: 'Dolphins', city: 'Miami'},
    {team: 'Jets', city: 'New York'}
]

let baseball = [
    {team: 'Mets', city: 'New York'},
    {team: 'Braves', city: 'Atlanta'},
    {team: 'Nationals', city: 'Washington'}
]

let hockey = [
    {team: 'Sabres', city: 'Buffalo'},
    {team: 'Red Wings', city: 'Detroit'},
    {team: 'Bruins', city: 'Boston'}
]



// Three endpoint requests
app.get('/football',(req, res) =>
 {
    res.send(football)
 })

 app.get('/baseball',(req, res) =>
 {
    res.send(baseball)
 })

 app.get('/hockey', (req,res) =>
 {
    res.send(hockey)
 })


 app.listen(PORT,() => {
    console.log(`App started on port: ${PORT}`)
 })