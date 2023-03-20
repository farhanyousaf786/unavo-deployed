import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoutes);



app.get("/",   (req, res)=> res.send("Hello from Express"));
app.all("*", (req, res)=> res.send("route does not exsits"));


// "catch all" route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
app.listen(port, ()=> console.log('server is listing port 5000'))
