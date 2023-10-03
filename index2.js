import express from "express";
import morgan from "morgan";
//Logging types. Log the request that como to the service
const app = express();
const port = 3000;
//use it
app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
