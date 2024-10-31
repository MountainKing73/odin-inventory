const { Router } = require("express");

const mediaController = require("../controllers/mediaController");
const indexRouter = Router();

indexRouter.get("/", mediaController.mediaAllGet);
indexRouter.get("/media/:mediaId", mediaController.mediaSpecificGet);
indexRouter.get("/new", mediaController.mediaNewGet);
indexRouter.post("/new", mediaController.mediaNewPost);
indexRouter.get("/update/:mediaId", mediaController.mediaUpdateGet);
indexRouter.post("/update/:mediaId", mediaController.mediaUpdatePost);

module.exports = indexRouter;
