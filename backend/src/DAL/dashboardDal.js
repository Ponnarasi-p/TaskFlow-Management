const prisma = require("../config/prismaClient");

const getDashboardSummary = async () => {

    const [

        employees,

        projects,

        tasks,

        comments,

        completedTasks,

        inProgressTasks,

        todoTasks,

        overdueTasks

    ] = await Promise.all([

        prisma.user.count({

            where: {

                isActive: true

            }

        }),

        prisma.project.count({

            where: {

                isActive: true

            }

        }),

        prisma.task.count({

            where: {

                isActive: true

            }

        }),

        prisma.comment.count({

            where: {

                isActive: true

            }

        }),

        prisma.task.count({

            where: {

                isActive: true,

                status: "COMPLETED"

            }

        }),

        prisma.task.count({

            where: {

                isActive: true,

                status: "IN_PROGRESS"

            }

        }),

        prisma.task.count({

            where: {

                isActive: true,

                status: "TODO"

            }

        }),

        prisma.task.count({

            where: {

                isActive: true,

                dueDate: {

                    lt: new Date()

                },

                status: {

                    not: "COMPLETED"

                }

            }

        })

    ]);

    return {

        employees,

        projects,

        tasks,

        comments,

        completedTasks,

        inProgressTasks,

        todoTasks,

        overdueTasks

    };

};

const getTaskStatus = async () => {

    return await prisma.task.groupBy({

        by: ["status"],

        where: {

            isActive: true

        },

        _count: {

            status: true

        }

    });

};

const getTaskPriority = async () => {

    return await prisma.task.groupBy({

        by: ["priority"],

        where: {

            isActive: true

        },

        _count: {

            priority: true

        }

    });

};

const getTasksByEmployee = async () => {

    const employees = await prisma.user.findMany({

        where: {

            isActive: true

        },

        select: {

            id: true,

            name: true,

            _count: {

                select: {

                    tasks: {

                        where: {

                            isActive: true

                        }

                    }

                }

            }

        }

    });

    return employees.map(employee => ({

        employeeId: employee.id,

        employeeName: employee.name,

        totalTasks: employee._count.tasks

    }));

};

const getTasksByProject = async () => {

    const projects = await prisma.project.findMany({

        where: {

            isActive: true

        },

        select: {

            id: true,

            name: true,

            _count: {

                select: {

                    tasks: {

                        where: {

                            isActive: true

                        }

                    }

                }

            }

        }

    });

    return projects.map(project => ({

        projectId: project.id,

        projectName: project.name,

        totalTasks: project._count.tasks

    }));

};

const getRecentTasks = async () => {

    return await prisma.task.findMany({

        where: {

            isActive: true

        },

        take: 5,

        orderBy: {

            createdAt: "desc"

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

const getRecentComments = async () => {

    return await prisma.comment.findMany({

        where: {

            isActive: true

        },

        take: 5,

        orderBy: {

            createdAt: "desc"

        },

        include: {

            user: {

                select: {

                    id: true,

                    name: true

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



module.exports = {

    getDashboardSummary,

    getTaskStatus,

    getTaskPriority,

    getTasksByEmployee,

    getTasksByProject,

    getRecentTasks,

    getRecentComments

};