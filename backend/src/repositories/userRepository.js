const userDal = require("../DAL/userDal");

const createUser = async (userData) => {

    return await userDal.createUser(userData);

};

const findUserByEmail = async (email) => {

    return await userDal.findUserByEmail(email);

};

const getEmployees = async (skip, take, search) => {

    return await userDal.getEmployees(
        skip,
        take,
        search
    );

};

const getEmployeeById = async (id) => {

    return await userDal.getEmployeeById(id);

};

const updateEmployee = async (id, employeeData) => {

    return await userDal.updateEmployee(
        id,
        employeeData
    );

};

const deleteEmployee = async (id) => {

    return await userDal.deleteEmployee(id);

};

module.exports = {

    createUser,

    findUserByEmail,

    getEmployees,

    getEmployeeById,

    updateEmployee,

    deleteEmployee

};