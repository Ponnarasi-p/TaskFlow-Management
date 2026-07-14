const jwt = require("jsonwebtoken");

const AUTH = require("../constants/authConstants");

const generateToken = (payload) => {

    return jwt.sign(

        payload,

        AUTH.JWT_SECRET,

        {

            expiresIn: AUTH.JWT_EXPIRES_IN

        }

    );

};

const verifyToken = (token) => {

    return jwt.verify(

        token,

        AUTH.JWT_SECRET

    );

};

module.exports = {

    generateToken,

    verifyToken

};