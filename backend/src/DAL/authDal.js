const prisma = require("../config/prismaClient");

const findUserByEmail = async (email) => {

    return await prisma.user.findUnique({

        where: {
            email
        }

    });

};

const createUser = async (userData) => {

    return await prisma.user.create({

        data: userData

    });

};

module.exports = {

    findUserByEmail,
    createUser

};