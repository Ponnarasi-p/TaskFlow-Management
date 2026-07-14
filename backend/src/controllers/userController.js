const userService =
    require("../services/userService");

const UserRequestDto =
    require("../DTO/userRequestDto");

const responseHandler =
    require("../utils/responseHandler");

const HTTP_STATUS =
    require("../constants/httpStatusConstants");

const MESSAGES =
    require("../constants/messages");

const createEmployee = async (
    req,
    res
) => {

    try {

        const employeeDto =
            new UserRequestDto(req.body);

        const result =
            await userService.createEmployee(
                employeeDto
            );

        return responseHandler.success(

            res,

            MESSAGES.USER.EMPLOYEE_CREATED,

            result,

            HTTP_STATUS.CREATED

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message,

            HTTP_STATUS.BAD_REQUEST

        );

    }

};

const getEmployees = async (
    req,
    res
) => {

    try {

        const {
            page,
            limit,
            search
        } = req.query;

        const result =
            await userService.getEmployees(
                page,
                limit,
                search
            );

        return responseHandler.success(

            res,

            MESSAGES.USER.EMPLOYEES_FETCHED,

            result

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message

        );

    }

};

const getEmployeeById = async (
    req,
    res
) => {

    try {

        const result =
            await userService.getEmployeeById(
                req.params.id
            );

        return responseHandler.success(

            res,

            MESSAGES.USER.EMPLOYEE_FETCHED,

            result

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message,

            HTTP_STATUS.NOT_FOUND

        );

    }

};

const updateEmployee = async (
    req,
    res
) => {

    try {

        const result =
            await userService.updateEmployee(

                req.params.id,

                req.body

            );

        return responseHandler.success(

            res,

            MESSAGES.USER.EMPLOYEE_UPDATED,

            result

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message,

            HTTP_STATUS.BAD_REQUEST

        );

    }

};

const deleteEmployee = async (
    req,
    res
) => {

    try {

        const result =
            await userService.deleteEmployee(
                req.params.id
            );

        return responseHandler.success(

            res,

            MESSAGES.USER.EMPLOYEE_DELETED,

            result

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message,

            HTTP_STATUS.BAD_REQUEST

        );

    }

};

module.exports = {

    createEmployee,

    getEmployees,

    getEmployeeById,

    updateEmployee,

    deleteEmployee

};