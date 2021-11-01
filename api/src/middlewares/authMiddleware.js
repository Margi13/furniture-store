const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants');

exports.auth = function(req, res, next) {
    let token = req.headers['X-Authorization'];

    if (token) {
        let decodedToken = jwt.verify(token, JWT_SECRET);
        if (decodedToken) {
            req.user = decodedToken;

            next();
        } else {
            res.status(401).json('You are not authorized');
        }
    } else {
        next();
    }
}
