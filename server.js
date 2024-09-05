require('dotenv').config(); 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({credentials:true, origin:'http://localhost:3000'})); 
app.use(bodyParser.json());
app.use(cookieParser());


PORT = 4040;



try { app.listen(PORT, ()=>{
        console.log(`PORT is up ${PORT}`); 
    })} catch { (err) =>
        console.log(err);
    }


const mailrouter  = require('./routes/mailroutes.js');


app.use('/mail', mailrouter);