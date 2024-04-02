require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", async(req, res) =>{
    return res.json({
        status: "OK"
    });
}); 


app.listen(process.env.PORT, () =>{
    console.log("App Started!! at port : " + process.env.PORT);
});