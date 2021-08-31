const router = require('express').Router();
const pool = require('../../db/index').pool;


router.put('/(:id)', async (req, res) => {
    
    const {id} = req.params;
    const {user_name, address, city, country, postal_code, about, dob} = req.body;

    try {
        const query = "UPDATE users_profile SET user_name = $1, address = $2, city = $3, country = $4, postal_code = $5, about = $6, dob = $7 WHERE id = $8";
        await pool.query(query, [user_name, address, city, country, postal_code, about, dob, id]);
        res.json("Profile Updated!");
    } catch (err) {
        console.log(err);
        res.json("API Error");
    }
});

router.get('/(:id)', async (req, res) => {
    
    const {id} = req.params;

    try {
        const query = "SELECT * FROM users_profile WHERE id = $1";
        const result = await pool.query(query, [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.json(err.message);
    }
});

module.exports = router;