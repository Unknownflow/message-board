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

indexRouter.get("/new", function (req, res) {
	res.render("form", { title: "Mini Messageboard", messages: messages });
	return res.end();
});

indexRouter.post("/new", function (req, res) {
	console.log(req.body);
	// console.log(JSON.stringify(req.body));
	// req.body.added = new Date();
	messages.push({ text: "test", added: new Date() });
	res.redirect("/");
	return res.end();
});

indexRouter.get("/", function (req, res) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
	return res.end();
});

module.exports = indexRouter;
