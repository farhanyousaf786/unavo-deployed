import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Hello from Express"));
app.all("*", (req, res) => res.send("route does not exsits"));

//static files
// app.use(express.static(path.join(__dirname, "./build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./build/index.html"));
// });

// "catch all" route
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
