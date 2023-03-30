const router = require('express').Router();
const info = require('../../package.json');

router.get('/status', function (req, res, next) {
    console.log('- WEB_INFO:', process.env.WEB_INFO);
    res.json({
        status: true,
        version: info.version,
        web_info: process.env.WEB_INFO
    });
    next();
});

router.post('/v1/api/token', function (req, res, next) {
    console.log('- WEB_INFO:', process.env.WEB_INFO);
    res.json({
        status: true,
        version: info.version,
        web_info: process.env.WEB_INFO
    });
    next();
});

module.exports = router;