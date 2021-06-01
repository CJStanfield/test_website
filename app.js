const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('<div><h1>Hello Website</h1></div>');
});

app.listen(5000, () =>{
    console.log('App listening on port 5000!');
})