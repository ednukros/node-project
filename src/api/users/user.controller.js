const passport = require("passport");

const register = (req, res, next) => {

    try {
        const done = (error, user) => {
            if(error) return next(error);
            return res.status(200).json(user);
        };

        passport.authenticate('register', done)(req);
    } catch (error) {
        return next(error);
    }
};

const login = (req, res, next) => {
    try {
        return res.status(200).json("Login runs");
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    register,
    login
}