const dashboardRepository = require("../repositories/dashboardRepository");

const getDashboardSummary = async () => {

    return await dashboardRepository.getDashboardSummary();

};


const getTaskStatus = async () =>
    await dashboardRepository.getTaskStatus();

const getTaskPriority = async () =>
    await dashboardRepository.getTaskPriority();

const getTasksByEmployee = async () =>
    await dashboardRepository.getTasksByEmployee();

const getTasksByProject = async () =>
    await dashboardRepository.getTasksByProject();

const getRecentTasks = async () =>
    await dashboardRepository.getRecentTasks();

const getRecentComments = async () =>
    await dashboardRepository.getRecentComments();

module.exports = {

    getDashboardSummary,
    getTaskStatus,
    getTaskPriority,
    getTasksByEmployee,
    getTasksByProject,
    getRecentTasks,
    getRecentComments

};