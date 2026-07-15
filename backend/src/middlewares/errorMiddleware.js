const responseHandler =
require("../utils/responseHandler");

const HTTP_STATUS =
require("../constants/httpStatusConstants");

const errorMiddleware = (

    err,

    req,

    res,

    next

) => {

    const statusCode =

        err.statusCode ||

        HTTP_STATUS.INTERNAL_SERVER_ERROR;

    return responseHandler.error(

        res,

        err.message ||

        "Something went wrong",

        statusCode

    );

};

module.exports = errorMiddleware;