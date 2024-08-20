const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newMessagesRouter = require("./routes/newMessagesRouter");

app.use("/", indexRouter);
app.use("/new", newMessagesRouter);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`My first express app listening on PORT ${PORT}`);
});
