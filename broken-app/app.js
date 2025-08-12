const express = require('express');
let axios = require('axios');
var app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/', async function (req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    // Await all the promises to resolve
    console.log(results);
    let userRes = await Promise.all(results);
    console.log(userRes);
    // Map the responses to extract name and bio
    let out = userRes.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000... woot woot!');
});
