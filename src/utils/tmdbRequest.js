const axios = require("axios");

export default async function tmdbRequest(endpoint, method = "GET") {
  const options = {
    method: method,
    url: `https://api.themoviedb.org/3/${endpoint}`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
    }
  };
  const res = await axios(options);
  return res.data;
}
