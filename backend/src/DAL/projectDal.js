const prisma = require("../config/prismaClient");

const createProject = async (projectData) => {

    return await prisma.project.create({

        data: projectData

    });

};

const findProjectByName = async (name) => {

    return await prisma.project.findFirst({

        where: {

            name,

            isActive: true

        }

    });

};

const getProjects = async (skip, take, search) => {

    const where = {

        isActive: true,

        ...(search && {

            name: {

                contains: search

            }

        })

    };

    const projects = await prisma.project.findMany({

        where,

        skip,

        take,

        orderBy: {

            createdAt: "desc"

        },

        select: {

            id: true,

            name: true,

            description: true,

            createdAt: true

        }

    });

    const totalRecords = await prisma.project.count({

        where

    });

    return {

        projects,

        totalRecords

    };

};

const getProjectById = async (id) => {

    return await prisma.project.findFirst({

        where: {

            id: Number(id),

            isActive: true

        },

        select: {

            id: true,

            name: true,

            description: true

        }

    });

};

const updateProject = async (id, projectData) => {

    return await prisma.project.update({

        where: {

            id: Number(id)

        },

        data: projectData,

        select: {

            id: true,

            name: true,

            description: true

        }

    });

};

const deleteProject = async (id) => {

    return await prisma.project.update({

        where: {

            id: Number(id)

        },

        data: {

            isActive: false

        },

        select: {

            id: true,

            name: true,

            description: true,

            isActive: true

        }

    });

};

module.exports = {

    createProject,

    findProjectByName,

    getProjects,

    getProjectById,

    updateProject,

    deleteProject

};