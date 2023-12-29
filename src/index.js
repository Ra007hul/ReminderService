const express = require('express');
const bodyParser = require('body-parser');
const {PORT}  = require('./config/serverConfig');
const app = express();
const {sendBasicEmail } =require('./services/email-services');

const setupAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.listen(PORT ,()=>{
          console.log(`Server started on port ${PORT}`);
        sendBasicEmail('airlinemanagement77@gmail.com',
        '007rahul9254@gmail.com',
        'Testing',
        'Helloworld');

    })
}

setupAndStartServer();
