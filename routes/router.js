const express = require("express");

const pelis = require("../components/pelis");

function router(app) {
    app.use('/pelis', pelis);
}

module.exports = router;