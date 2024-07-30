const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.get('/users', (req, res) => {
    // For pool initialization, see above
    db.query('SELECT * FROM users', function (err, rows) {
        if (err) {
            console.log(err)
            return
        }

        return res.status(200).json(rows)
    });
})

module.exports = router