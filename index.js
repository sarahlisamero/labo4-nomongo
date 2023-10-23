const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json()); // built-in express.json() middleware to parse JSON data

app.get('/api/v1/messages', (req, res) => {
    res.json({
      status: "success",
      message: "GET messages",
      data: [
        {
          user: "Sarah",
          message: "Hi",
        },
        {
          user: "Lisa",
          message: "Hello",
        },
      ],
    });
});

app.get('/api/v1/messages/:id', (req, res) => {
  const id = parseInt(req.params.id);
    res.json({
      status: "success",
      message: `GETTING message with ID ${id}`,
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

