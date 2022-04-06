const express = require("express"),
  app = express(),
  port = 5000,
  cors = require("cors");

app.use(cors());

app.get("/priority", async (req, res) => {
  res.json([
    {
      id: 1,
      orderOfPrecedence: 1,
      title: "Urgent",
    },
    {
      id: 2,
      orderOfPrecedence: 2,
      title: "Regular",
    },
    {
      id: 3,
      orderOfPrecedence: 3,
      title: "Trivial",
    },
  ]);
});

app.listen(port);
