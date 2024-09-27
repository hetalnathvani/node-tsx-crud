import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  console.log(res);

  res.send("Hello, Node!");
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
