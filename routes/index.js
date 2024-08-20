const messages = [
	{
		id: 0,
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		id: 1,
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

const { Router } = require("express");

const router = Router();

router.get("/new", function (req, res) {
	res.render("form", { title: "Mini Messageboard", messages: messages });
	return res.end();
});

router.post("/new", function (req, res) {
	messages.push({
		id: messages.length,
		user: req.body.messageUser,
		text: req.body.messageText,
		added: new Date(),
	});
	res.redirect("/");
	return res.end();
});

router.get("/message/:id", function (req, res) {
	const id = req.params.id;
	res.render("message", { message: messages[id] });
	return res.end();
});

router.get("/", function (req, res) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
	return res.end();
});

module.exports = router;
