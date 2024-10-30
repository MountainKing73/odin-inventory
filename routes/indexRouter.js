const { Router } = require("express");

const mediaController = require("../controllers/mediaController");
const indexRouter = Router();

indexRouter.get("/", mediaController.messagesAllGet);
indexRouter.get("/media/:mediaId", mediaController.messagesSpecificGet);
indexRouter.get("/new", mediaController.messagesNewGet);
indexRouter.post("/new", mediaController.messagesNewPost);
