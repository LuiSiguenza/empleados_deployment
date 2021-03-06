const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({path: 'variables.env'});



const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const whitelist = [process.env.FRONTEND_URL];

const corsOption = { 

    origin: ( origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin);
        if(existe){
            callback(null, true);
        }else {
            callback(new Error(whitelist));
        }
    }
}

app.use(cors(corsOption));


app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000

app.listen(port, host, () => {});