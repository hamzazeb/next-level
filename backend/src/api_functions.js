const pool = require('../db/index').pool;

// import pool from ('../db/index').pool;

const saveUsers = async (req, res) => {
    const { name, email, password} = req.body;

    try {
        const user = await pool.query(
            "INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, password]
        );
        res.json(user.rows);
    } catch (err) {
        console.error(err.message);
        res.json("API Error");
    }
}

const getUsers = async (req, res) => {
    var {id} = req.params;

    if(id == 0){
        id = null;
    }

    try {
        const user = await pool.query(
            "SELECT id, name, email from users where ($1::int is null or id = $1)", [id]
        )
        res.json(user.rows);
    } catch (err) {
        console.error(err.message);
        res.json("API Error");
    }
}

module.exports = {
    saveUsers,
    getUsers,
}