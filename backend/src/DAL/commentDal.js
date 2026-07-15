const prisma = require("../config/prismaClient");

const createComment = async (commentData) => {

    return await prisma.comment.create({

        data: commentData,

        include: {

            user: {

                select: {

                    id: true,
                    name: true,
                    email: true

                }

            },

            task: {

                select: {

                    id: true,
                    title: true,
                    status: true

                }

            }

        }

    });

};

const getCommentsByTaskId = async (taskId) => {

    return await prisma.comment.findMany({

        where: {

            taskId: Number(taskId),

            isActive: true

        },

        orderBy: {

            createdAt: "asc"

        },

        include: {

            user: {

                select: {

                    id: true,
                    name: true,
                    email: true

                }

            },

            task: {

                select: {

                    id: true,
                    title: true,
                    status: true

                }

            }

        }

    });

};

const getCommentById = async (id) => {

    return await prisma.comment.findFirst({

        where: {

            id: Number(id),

            isActive: true

        },

        include: {

            user: {

                select: {

                    id: true,

                    name: true,

                    email: true,

                    role: true

                }

            },

            task: {

                select: {

                    id: true,

                    title: true

                }

            }

        }

    });

};

const updateComment = async (id, commentData) => {

    return await prisma.comment.update({

        where: {

            id: Number(id)

        },

        data: commentData,

        include: {

            user: {

                select: {

                    id: true,
                    name: true,
                    email: true

                }

            },

            task: {

                select: {

                    id: true,
                    title: true,
                    status: true

                }

            }

        }

    });

};

const deleteComment = async (id) => {

    return await prisma.comment.update({

        where: {

            id: Number(id)

        },

        data: {

            isActive: false

        }

    });

};

module.exports = {

    createComment,

    getCommentsByTaskId,

    getCommentById,

    updateComment,

    deleteComment

};