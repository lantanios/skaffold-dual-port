const express = require("express");
const app = express();
const port = process.env.test == 1 ? 3001 : 3002;

console.log("@#-- -port--", port);
console.log("@#---process.env.test--", process.env.test);

app.get("/", (req, res) => res.send("Hi from gcloud! port: " + port));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
