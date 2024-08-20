const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", function (req, res) {
	res.send("index");
});

module.exports = indexRouter;
