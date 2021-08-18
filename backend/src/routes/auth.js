const router = require('express').Router();
const pool = require('../../db/index').pool;
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {
    try {
        const { f_name, l_name, password, email, phone_number } = req.body;

        // check if email already exists
        const checkUser = await pool.query("select 1 from users where email = $1", [email]);
        if (checkUser.rowCount) return res.status(400).json("Email already exists!");

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await pool.query(
            "INSERT INTO users(f_name, l_name, password, email, phone_number, timestamp) values($1, $2, $3, $4, $5, $6)", [f_name, l_name, hashedPassword, email, phone_number, 'NOW']);

        res.json("User Registered");
    } catch (err) {
        console.log(err);
        res.json("API Error");
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password} = req.body;

        // check if email exists
        const checkUser = await pool.query("select id, f_name, l_name, email, password from users where email = $1", [email]);
        if (!checkUser.rowCount) return res.status(400).json("Email doesn't exists!");

        //validate password
        const validPwd = await bcrypt.compare(password, checkUser.rows[0].password);
        if (!validPwd) return res.status(400).json("Password doesn't match!");

        res.json({
            id: checkUser.rows[0].id,
            name: checkUser.rows[0].f_name + ' ' + checkUser.rows[0].l_name,
            email: checkUser.rows[0].email
        });
    } catch (err) {
        console.log(err);
        res.json("API Error");
    }
});

module.exports = router;