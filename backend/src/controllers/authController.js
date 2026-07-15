const authService = require("../services/authService");
const LoginRequestDto = require("../DTO/loginRequestDto");
const responseHandler = require("../utils/responseHandler");
const HTTP_STATUS = require("../constants/httpStatusConstants");
const MESSAGES = require("../constants/messages");
const asyncHandler = require("../utils/asyncHandler");

const login = asyncHandler(async (req, res) => {

    const loginDto = new LoginRequestDto(req.body);

    const result = await authService.login(loginDto);

    return responseHandler.success(
        res,
        MESSAGES.AUTH.LOGIN_SUCCESS,
        result,
        HTTP_STATUS.OK
    );

});

const me = asyncHandler(async (req, res) => {

    return responseHandler.success(
        res,
        "User fetched successfully",
        req.user,
        HTTP_STATUS.OK
    );

});

module.exports = {
    login,
    me
};