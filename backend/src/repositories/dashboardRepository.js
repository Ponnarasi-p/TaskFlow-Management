const dashboardDal = require("../DAL/dashboardDal");

const getDashboardSummary = async () => {

    return await dashboardDal.getDashboardSummary();

};

const getTaskStatus = async () =>
    await dashboardDal.getTaskStatus();

const getTaskPriority = async () =>
    await dashboardDal.getTaskPriority();

const getTasksByEmployee = async () =>
    await dashboardDal.getTasksByEmployee();

const getTasksByProject = async () =>
    await dashboardDal.getTasksByProject();

const getRecentTasks = async () =>
    await dashboardDal.getRecentTasks();

const getRecentComments = async () =>
    await dashboardDal.getRecentComments();

module.exports = {

    getDashboardSummary,
    getTaskStatus,
    getTaskPriority,
    getTasksByEmployee,
    getTasksByProject,
    getRecentTasks,
    getRecentComments

};