const router = require('express').Router();

const userService = require('../services/userService');

router.post('/register', async(req, res) => {

    console.log(req.body);
    let { email, password } = req.body;

    let user = await userService.register({ email, password });

    res.json({ ok: true });
})


module.exports = router;