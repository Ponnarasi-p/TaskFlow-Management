const prisma = require("../config/prismaClient");

const createTask = async (taskData) => {

    return await prisma.task.create({

        data: taskData,

        include: {

            assignedTo: {

                select: {

                    id: true,

                    name: true,

                    email: true

                }

            },

            project: {

                select: {

                    id: true,

                    name: true

                }

            }

        }

    });

};

const getTasks = async (
    skip,
    take,
    filters
) => {

    const where = {

        isActive: true,

        ...(filters.search && {

            OR: [

                {

                    title: {

                        contains: filters.search

                    }

                },

                {

                    description: {

                        contains: filters.search

                    }

                }

            ]

        }),

        ...(filters.status && {

            status: filters.status

        }),

        ...(filters.priority && {

            priority: filters.priority

        }),

        ...(filters.assignedToId && {

            assignedToId:
                Number(filters.assignedToId)

        }),

        ...(filters.projectId && {

            projectId:
                Number(filters.projectId)

        })

    };

    const tasks = await prisma.task.findMany({

        where,

        skip,

        take,

        orderBy: {

            createdAt: "desc"

        },

        include: {

            assignedTo: {

                select: {

                    id: true,

                    name: true,

                    email: true

                }

            },

            project: {

                select: {

                    id: true,

                    name: true

                }

            }

        }

    });

    const totalRecords =
        await prisma.task.count({

            where

        });

    return {

        tasks,

        totalRecords

    };

};

const getTaskById = async (id) => {

    return await prisma.task.findFirst({

        where: {

            id: Number(id),

            isActive: true

        },

        include: {

            assignedTo: {

                select: {

                    id: true,

                    name: true,

                    email: true

                }

            },

            project: {

                select: {

                    id: true,

                    name: true

                }

            }

        }

    });

};

const updateTask = async (
    id,
    taskData
) => {

    return await prisma.task.update({

        where: {

            id: Number(id)

        },

        data: taskData,

        include: {

            assignedTo: {

                select: {

                    id: true,

                    name: true,

                    email: true

                }

            },

            project: {

                select: {

                    id: true,

                    name: true

                }

            }

        }

    });

};

const deleteTask = async (id) => {

    return await prisma.task.update({

        where: {

            id: Number(id)

        },

        data: {

            isActive: false

        },

        include: {

            assignedTo: {

                select: {

                    id: true,

                    name: true

                }

            },

            project: {

                select: {

                    id: true,

                    name: true

                }

            }

        }

    });

};

module.exports = {

    createTask,

    getTasks,

    getTaskById,

    updateTask,

    deleteTask

};