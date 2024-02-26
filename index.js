const express = require('express');
app = express();
bodyparser = require('body-parser');
require('express-async-errors');

const db = require('./db');
studentRoutes = require('./controllers/student.controller');




app.use(bodyparser.json());
app.use('/api/students', studentRoutes);
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send('Something went wrong!');
});




db.query("SELECT 1")
     .then(() => {
        console.log('db connection succeeded. ');
        app.listen(8081,
            () => console.log('server started at 8081'));
     })
     .catch(err => console.log('db connection failed. \n' + err));
