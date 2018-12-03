var express = require('express');

// Database
const db = require('../models');

var router = express.Router();

/* GET personas listing. */
router.get('/', function(req, res, next) {
    return db.Persona.findAll()
        .then((personas) => res.send(personas))
        .catch((err) => {
            console.log('There was an error querying contacts', JSON.stringify(err))
            return res.send(err)
        });
});

/* GET personas by id. */
router.get('/:id', function(req, res, next) {
    return db.Persona.findById(req.params.id)
        .then((persona) => res.send(persona))
        .catch((err) => {
            console.log('Error getting the Persona', JSON.stringify(err))
            return res.send(err)
        });
});

module.exports = router;
