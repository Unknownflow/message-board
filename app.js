const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`My first express app listening on PORT ${PORT}`);
});
