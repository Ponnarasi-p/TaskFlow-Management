const prisma = require("../config/prismaClient");

const createUser = async (userData) => {

    return await prisma.user.create({
        data: userData
    });

};

const findUserByEmail = async (email) => {

    return await prisma.user.findUnique({
        where: {
            email
        }
    });

};

const getEmployees = async (skip, take, search) => {

    const where = {

        isActive: true,

        ...(search && {

            OR: [

                {
                    name: {
                        contains: search
                    }
                },

                {
                    email: {
                        contains: search
                    }
                }

            ]

        })

    };

    const employees = await prisma.user.findMany({

        where,

        skip,

        take,

        orderBy: {

            createdAt: "desc"

        },

        select: {

            id: true,

            name: true,

            email: true,

            role: true,

            createdAt: true

        }

    });

    const totalRecords = await prisma.user.count({

        where

    });

    return {

        employees,

        totalRecords

    };

};

const getEmployeeById = async (id) => {

    return await prisma.user.findFirst({

        where: {

            id: Number(id),

            isActive: true

        },

        select: {

            id: true,

            name: true,

            email: true,

            role: true

        }

    });

};

const updateEmployee = async (id, employeeData) => {

    return await prisma.user.update({

        where: {

            id: Number(id)

        },

        data: employeeData,

        select: {

            id: true,

            name: true,

            email: true,

            role: true

        }

    });

};

const deleteEmployee = async (id) => {

    return await prisma.user.update({

        where: {

            id: Number(id)

        },

        data: {

            isActive: false

        },

        select: {

            id: true,

            name: true,

            email: true,

            role: true,

            isActive: true

        }

    });

};

module.exports = {

    createUser,

    findUserByEmail,

    getEmployees,

    getEmployeeById,

    updateEmployee,

    deleteEmployee

};