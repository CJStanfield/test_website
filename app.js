const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('<div><h1>Double Proxy Test?</h1></div>');
});

app.listen(5000, () =>{
    console.log('App listening on port 5000!');
})