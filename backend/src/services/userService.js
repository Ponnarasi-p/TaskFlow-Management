const userRepository = require("../repositories/userRepository");

const { hashPassword } = require("../utils/passwordUtil");

const UserResponseDto = require("../DTO/userResponseDto");

const MESSAGES = require("../constants/messages");

const createEmployee = async (employeeDto) => {

    const existingUser =
        await userRepository.findUserByEmail(
            employeeDto.email
        );

    if (existingUser && existingUser.isActive) {

        throw new Error(
            MESSAGES.USER.EMAIL_EXISTS
        );

    }

    employeeDto.password =
        await hashPassword(employeeDto.password);

    const user =
        await userRepository.createUser(employeeDto);

    return new UserResponseDto(user);

};

const getEmployees = async (page, limit, search) => {

    page = Number(page) || 1;
    limit = Number(limit) || 10;

    const skip = (page - 1) * limit;

    const result =
        await userRepository.getEmployees(
            skip,
            limit,
            search
        );

    return {

        employees: result.employees,

        pagination: {

            page,

            limit,

            totalRecords: result.totalRecords,

            totalPages:
                Math.ceil(
                    result.totalRecords / limit
                )

        }

    };

};

const getEmployeeById = async (id) => {

    if (isNaN(Number(id))) {

        throw new Error(
            MESSAGES.USER.INVALID_EMPLOYEE_ID
        );

    }

    const employee =
        await userRepository.getEmployeeById(id);

    if (!employee) {

        throw new Error(
            MESSAGES.USER.EMPLOYEE_NOT_FOUND
        );

    }

    return employee;

};

const updateEmployee = async (
    id,
    employeeData
) => {

    if (isNaN(Number(id))) {

        throw new Error(
            MESSAGES.USER.INVALID_EMPLOYEE_ID
        );

    }

    const employee =
        await userRepository.getEmployeeById(id);

    if (!employee) {

        throw new Error(
            MESSAGES.USER.EMPLOYEE_NOT_FOUND
        );

    }

    if (
        employeeData.email &&
        employeeData.email !== employee.email
    ) {

        const existingUser =
            await userRepository.findUserByEmail(
                employeeData.email
            );

        if (
            existingUser &&
            existingUser.isActive
        ) {

            throw new Error(
                MESSAGES.USER.EMAIL_EXISTS
            );

        }

    }

    const updatedEmployee =
        await userRepository.updateEmployee(
            id,
            employeeData
        );

    return new UserResponseDto(
        updatedEmployee
    );

};

const deleteEmployee = async (id) => {

    if (isNaN(Number(id))) {

        throw new Error(
            MESSAGES.USER.INVALID_EMPLOYEE_ID
        );

    }

    const employee =
        await userRepository.getEmployeeById(id);

    if (!employee) {

        throw new Error(
            MESSAGES.USER.EMPLOYEE_NOT_FOUND
        );

    }

    return await userRepository.deleteEmployee(
        id
    );

};

module.exports = {

    createEmployee,

    getEmployees,

    getEmployeeById,

    updateEmployee,

    deleteEmployee

};