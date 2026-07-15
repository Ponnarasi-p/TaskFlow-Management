const authRepository = require("../repositories/authRepository");

const { comparePassword } = require("../utils/passwordUtil");

const { generateToken } = require("../utils/tokenUtil");

const MESSAGES = require("../constants/messages");

const ApiError = require("../errors/ApiError");
const HTTP_STATUS = require("../constants/httpStatusConstants");

const login = async (loginDto) => {

    const user = await authRepository.findUserByEmail(
        loginDto.email
    );

    if (!user || !user.isActive) {

      throw new ApiError(

    HTTP_STATUS.UNAUTHORIZED,

    MESSAGES.AUTH.INVALID_CREDENTIALS

);

    }

    const isPasswordValid =
        await comparePassword(
            loginDto.password,
            user.password
        );

    if (!isPasswordValid) {

       throw new ApiError(

    HTTP_STATUS.UNAUTHORIZED,

    MESSAGES.AUTH.INVALID_CREDENTIALS

);

    }

    const token = generateToken({

        id: user.id,

        email: user.email,

        role: user.role

    });

    return {

        token,

        user: {

            id: user.id,

            name: user.name,

            email: user.email,

            role: user.role

        }

    };

};

module.exports = {

    login

};