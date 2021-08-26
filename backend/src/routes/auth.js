const router = require('express').Router();
const pool = require('../../db/index').pool;
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {
    try {
        const { f_name, l_name, password, email, phone_number } = req.body;

        // check if email already exists
        const checkUser = await pool.query("select 1 from users_profile where email = $1", [email]);
        if (checkUser.rowCount) return res.status(400).json("Email already exists!");

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user_info = await pool.query(
            "INSERT INTO users_profile(f_name, l_name, password, email, phone_number) values($1, $2, $3, $4, $5) RETURNING id", [f_name, l_name, hashedPassword, email, phone_number]);
        
        await pool.query(
            "INSERT INTO users(user_profile_id, role, timestamp) values($1, $2, $3)", [user_info.rows[0].id, 'general', 'NOW']);

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
        const checkUser = await pool.query("select up.id, u.id as user_id, up.f_name, up.l_name, up.email, up.password from users_profile up join users u on up.id = u.user_profile_id where up.email = $1", [email]);
        if (!checkUser.rowCount) return res.status(400).json("Email doesn't exists!");

        //validate password
        const validPwd = await bcrypt.compare(password, checkUser.rows[0].password);
        if (!validPwd) return res.status(400).json("Password doesn't match!");

        let user = checkUser.rows[0];
        res.json({
            user_id : user.user_id,
            user_profile_id: user.id,
            name: user.f_name + ' ' + user.l_name,
            email: user.email
        });
    } catch (err) {
        console.log(err);
        res.json("API Error");
    }
});

module.exports = router;