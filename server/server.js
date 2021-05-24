const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

var receivedStrings = [];

app.post("/stringcheck", (req, res) => {
  const { str } = req.body;
  console.log(str);
  if (receivedStrings.indexOf(str) !== -1) {
    return res.json({ result: true });
  }
  receivedStrings.push(str);
  return res.json({ result: false });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
