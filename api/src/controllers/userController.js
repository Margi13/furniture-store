const router = require('express').Router();

const userService = require('../services/userService');

router.post('/register', async(req, res, next) => {

    let { email, password } = req.body;

    try {
        let user = await userService.register({ email, password });
        let { accessToken, refreshToken } = await userService.login({ email, password });

        res.json({
            _id: user._id,
            email: user.email,
            accessToken,
            refreshToken
        });

    } catch (error) {
        next(error);
    }
});

router.post('/login', async(req, res, next) => {
    let { email, password } = req.body;

    try {
        let { user, accessToken, refreshToken } = await userService.login({ email, password });

        res.json({
            _id: user._id,
            email: user.email,
            accessToken,
            refreshToken
        });

    } catch (error) {
        next(error);
    }
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
})
module.exports = router;