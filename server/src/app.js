const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");


const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());


app.get("/",(req,res) =>{
    res.send({
        message:"hello world!",
    });
});

app.post("/register", (req, res) => {
    res.send({
      message: "Your user"+req.body.email+"was registered, have fun!",
    });
  });

app.listen(8081);