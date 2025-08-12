const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();

const axios = require('axios');


// ------------- //
//    Routes     //
// ------------- //

router.post('/', async function (req, res, next) {
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

module.exports = router;