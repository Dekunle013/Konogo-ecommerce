import express from 'express'
const port = 8000;

const app = express();

app.get("/",(reg, res) => {
  res.send("Hello World: from backend")
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});