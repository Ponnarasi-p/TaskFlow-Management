const userService = require("../services/userService");

const UserRequestDto = require("../DTO/userRequestDto");

const responseHandler = require("../utils/responseHandler");

const HTTP_STATUS = require("../constants/httpStatusConstants");

const MESSAGES = require("../constants/messages");

const asyncHandler = require("../utils/asyncHandler");

const createEmployee = asyncHandler(async (req, res) => {

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

});

const getEmployees = asyncHandler(async (req, res) => {

    const { page, limit, search } = req.query;

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

});

const getEmployeeById = asyncHandler(async (req, res) => {

    const result =
        await userService.getEmployeeById(
            req.params.id
        );

    return responseHandler.success(

        res,

        MESSAGES.USER.EMPLOYEE_FETCHED,

        result

    );

});

const updateEmployee = asyncHandler(async (req, res) => {

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

});

const deleteEmployee = asyncHandler(async (req, res) => {

    const result =
        await userService.deleteEmployee(
            req.params.id
        );

    return responseHandler.success(

        res,

        MESSAGES.USER.EMPLOYEE_DELETED,

        result

    );

});
module.exports = {

    createEmployee,

    getEmployees,

    getEmployeeById,

    updateEmployee,

    deleteEmployee

};