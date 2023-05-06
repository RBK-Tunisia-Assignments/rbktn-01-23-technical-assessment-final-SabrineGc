const express = require("express");
const cors= require("cors")
const app = express();
const PORT = 4000;
const router=require("./routes/recipiesRoute.js")
// TODO - add additional route handlers as necessary
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use("/api/recipies",router)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
