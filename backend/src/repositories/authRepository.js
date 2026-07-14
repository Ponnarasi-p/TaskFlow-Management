const authDal = require("../DAL/authDal");

const findUserByEmail = async (email) => {

    return await authDal.findUserByEmail(email);

};

const createUser = async (userData) => {

    return await authDal.createUser(userData);

};
module.exports = {

    findUserByEmail,
    createUser

};