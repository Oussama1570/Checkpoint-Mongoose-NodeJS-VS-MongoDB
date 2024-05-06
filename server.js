//1 - require express : 
const express = require("express");

// 2 - create instance : 
const app = express();


// 5 require dotenv & configure :
require("dotenv").config();

// 6 connect DB :np
const connectDB = require ("./Config/connectDB");
connectDB();

// 3 - create PORT :
const PORT = 9876;

// 4 - create server : 
app.listen(PORT, (error) => {
    error  
     ? console.error(`Failed to connect to server !!! ${error}`)
     
    : console.log (`Server in running on port ${PORT} ...`);
}); 






