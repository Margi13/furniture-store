const User = require('../models/User');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../constants');

exports.register = ({ email, password }) => User.create({ email, password });

exports.login = async({ email, password }) => {
    let user = await User.findOne({ email });

    // If there is user
    if (!user) {
        throw new Error('Invalid username or password');
    }

    // If this is his password
    let isValid = await user.validatePassword(password);
    if (!isValid) {
        throw new Error('Invalid username or password');
    }

    let payload = {
        _id: user._id,
        email: user.email
    };

    let token = await jwt.sign(payload, JWT_SECRET);
    if (!token) {

        return { user, token };
    } else {
        throw new Error('Cannot make token for user');
    }
}