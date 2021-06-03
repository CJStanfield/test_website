const express = require('express');

const app = express()

const port = 5001

app.get('/', (req, res) => {
    res.send('<div><h1>Is it working? Develop Branch</h1></div>');
});

app.listen(5001, () =>{
    console.log(`App listening on ${port}`);
})