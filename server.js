const express = require("express");
const cors = require("cors");
const app = express();
const auth = require("./routes/auth");

app.use(cors());
app.use(express.json());
app.use("/api/auth", auth);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Gateway listening on port ${port}`));
