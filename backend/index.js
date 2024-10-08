const express = require("express");
const cors = require("cors");

const bookRoutes = require("./books");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use("/books", bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Book API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
