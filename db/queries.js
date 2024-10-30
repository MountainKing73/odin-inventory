const pool = require("./pool");

async function getAllMedia() {
  const sql = `SELECT m.title, m.release_year, b.band_name, mf.format_name, g.genre_name 
FROM media as m
LEFT join band as b on m.band_id = b.id 
left join media_format mf on m.format_id = mf.id 
left join genre g on m.genre_id = g.id 
`;
  const { rows } = await pool.query(sql);
  console.log("getAllMedia row count: " + rows.length);
  return rows;
}

module.exports = { getAllMedia };
