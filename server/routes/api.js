const router = require('express').Router();
const info = require('../package.json');

router.get('/status', function (req, res, next) {
    console.log('- WEB_INFO:', process.env.WEB_INFO);
    res.json({
        status: true,
        message: `${info.name} execute get success`,
        version: info.version,
        web_info: process.env.WEB_INFO
    });
    next();
});

module.exports = router;