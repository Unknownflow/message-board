const { Router } = require("express");

const newMessagesRouter = Router();

newMessagesRouter.get("/", function (req, res) {
	res.send("new messages");
});

module.exports = newMessagesRouter;
