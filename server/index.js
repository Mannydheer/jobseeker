const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.SERVERPORT;
console.log(process.env.PORT);

const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
