const express = require("express");
const app = express();
const port = process.env.POST || 3000;

app.use("/", express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});