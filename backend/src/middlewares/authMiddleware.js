const { verifyToken } = require("../utils/tokenUtil");
const responseHandler = require("../utils/responseHandler");
const HTTP_STATUS = require("../constants/httpStatusConstants");
const MESSAGES = require("../constants/messages");

const authMiddleware = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {

            return responseHandler.error(
                res,
                MESSAGES.AUTH.TOKEN_REQUIRED,
                HTTP_STATUS.UNAUTHORIZED
            );

        }

        const token = authHeader.split(" ")[1];

        const decoded = verifyToken(token);

        req.user = decoded;

        next();

    } catch (error) {

        return responseHandler.error(
            res,
            MESSAGES.AUTH.INVALID_TOKEN,
            HTTP_STATUS.UNAUTHORIZED
        );

    }

};

module.exports = authMiddleware;