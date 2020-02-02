const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Mauro Meden - Web Developer'
    });
});

router.get('/contact-me', (req, res) => {
    res.render('pages/contact', {
        title: 'Mauro Meden - Web Developer'
    });
});

router.get('/portfolio', (req, res) => {
    res.render('pages/portfolio', {
        title: 'Mauro Meden - Web Developer'
    });
});

router.get('/resume', (req, res) => {
    res.render('pages/resume', {
        title: 'Mauro Meden - Web Developer'
    });
});

module.exports = router;