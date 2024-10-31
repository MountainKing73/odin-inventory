const db = require("../db/queries");

async function mediaAllGet(req, res) {
  const media = await db.getAllMedia();
  res.render("index", { media: media });
}

async function mediaSpecificGet(req, res) {
  const { mediaId } = req.params;
  const media = await db.getSpecificMedia(mediaId);
  res.render("viewMedia", { media: media[0] });
}

async function mediaNewGet(req, res) {
  const mediaFormats = await db.getMediaFormats();
  const genres = await db.getGenres();
  res.render("newMedia", { mediaFormats: mediaFormats, genres: genres });
}

async function mediaNewPost(req, res) {
  await db.insertMedia(
    req.body.title,
    req.body.year,
    req.body.band,
    req.body.format,
    req.body.genre,
  );

  res.redirect("/");
}

async function mediaUpdateGet(req, res) {
  const { mediaId } = req.params;
  const media = await db.getSpecificMedia(mediaId);
  console.log("media title: " + media[0].title);
  const mediaFormats = await db.getMediaFormats();
  const genres = await db.getGenres();
  res.render("updateMedia", {
    media: media[0],
    mediaFormats: mediaFormats,
    genres: genres,
  });
}

async function mediaUpdatePost(req, res) {
  const { mediaId } = req.params;
  await db.updateMedia(
    mediaId,
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
  mediaUpdateGet,
  mediaUpdatePost,
};
