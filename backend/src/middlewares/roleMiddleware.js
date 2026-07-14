const responseHandler = require("../utils/responseHandler");
const HTTP_STATUS = require("../constants/httpStatusConstants");

const authorize = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {

            return responseHandler.error(
                res,
                "Access denied",
                HTTP_STATUS.FORBIDDEN
            );

        }

        next();

    };

};

module.exports = authorize;