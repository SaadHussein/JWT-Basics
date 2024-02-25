const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new CustomAPIError('Please Provide Email and Password.', 400);
    }

    const id = new Date().getDate();

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
    res.status(200).json({
        message: "User Created.",
        token
    });
};

const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);

    res.status(200).json({
        msg: `Hello ${req.user.username}.`,
        secret: `Your Secret Number is ${luckyNumber}`
    });
};

module.exports = {
    login,
    dashboard
};