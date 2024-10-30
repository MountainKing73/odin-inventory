const db = require("../db/queries");

async function mediaAllGet(req, res) {
  const media = await db.getAllMedia();
  console.log("media: " + media);
  res.render("index", { media: media });
}

async function mediaSpecificGet(req, res) {
  console.log("Show specified media");
}

async function mediaNewGet(req, res) {
  console.log("Show new media form");
}

async function mediaNewPost(req, res) {
  console.log("Insert new media");
}

module.exports = {
  mediaAllGet,
  mediaSpecificGet,
  mediaNewGet,
  mediaNewPost,
};
