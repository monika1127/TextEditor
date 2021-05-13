const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.POST || 3000;

app.use("/", express.static("public"));
app.use(express.json());

app.get("/import", (req, res) => {
  fs.readFile(__dirname + "/public/text.json", (err, data) => {
    if (err) throw err;
    res.statusCode = 200;
    res.send(data);
  });
});

app.post("/export", (req, res) => {
  const text = JSON.stringify(req.body);
  fs.writeFile(__dirname + "/public/text.json", text, (err) => {
    if (err) throw err;
    res.statusCode = 204;
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
