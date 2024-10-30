const pool = require("./pool");

async function getAllMedia() {
  const sql = `SELECT m.title, m.release_year, m.band_name, mf.format_name, g.genre_name 
FROM media as m
left join media_format mf on m.format_id = mf.id 
left join genre g on m.genre_id = g.id 
`;
  const { rows } = await pool.query(sql);
  return rows;
}

async function getMediaFormats() {
  const { rows } = await pool.query("select format_name, id from media_format");
  return rows;
}

async function getGenres() {
  const { rows } = await pool.query("select genre_name, id from genre");
  return rows;
}

async function insertMedia(title, release_year, band, format_id, genre_id) {
  const sql = `INSERT INTO media (title, release_year, band_name, format_id, genre_id, creation_date) VALUES 
    ($1, $2, $3, $4, $5, current_timestamp)`;
  await pool.query(sql, [title, release_year, band, format_id, genre_id]);
}

module.exports = { getAllMedia, getMediaFormats, getGenres, insertMedia };
