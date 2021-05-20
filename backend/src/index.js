const axios = require("axios");
const express = require("express");
const app = express();

const port = process.env.test == 1 ? 3001 : 3002;

const serverName = port === 3001 ? "Server-1" : "Server-2";

const INTERNAL_SERVICE_ADDRESS = "http://localhost:5000/";

const callInternalServer = async (callfrom) => {
  return await axios
    .post(INTERNAL_SERVICE_ADDRESS, { caller: callfrom })
    .catch((error) => {
      console.log(`${serverName} Error: ${error.message}.`);
    });
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const internalServerResp = await callInternalServer(serverName);
  console.log(`${serverName} got request from internet.`);

  res.send(`Response from ${serverName}: "${internalServerResp.data}".`);
});

app.listen(port, () =>
  console.log(`${serverName} is listening on port ${port}!`)
);
