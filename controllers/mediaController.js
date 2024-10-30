const db = require("../db/queries");

async function mediaAllGet(req, res) {
  const media = await db.getAllMedia();
  res.render("index", { media: media });
}

async function mediaSpecificGet(req, res) {
  console.log("Show specified media");
}

async function mediaNewGet(req, res) {
  const mediaFormats = await db.getMediaFormats();
  const genres = await db.getGenres();
  res.render("newMedia", { mediaFormats: mediaFormats, genres: genres });
}

async function mediaNewPost(req, res) {
  console.log("Insert new media");
  await db.insertMedia(
    req.body.title,
    req.body.year,
    req.body.band,
    req.body.format,
    req.body.genre,
  );

  res.redirect("/");
}

module.exports = {
  mediaAllGet,
  mediaSpecificGet,
  mediaNewGet,
  mediaNewPost,
};
