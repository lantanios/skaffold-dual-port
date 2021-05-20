const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
  const { caller } = req.body;

  console.log(`Internal_server got request from ${caller}.`);

  res.send(`Internal service responding to ${caller}`);
});

app.listen(port, () => console.log(`Internal server listenting on ${port}!`));
