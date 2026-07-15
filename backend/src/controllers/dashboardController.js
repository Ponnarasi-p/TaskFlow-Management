const dashboardService = require("../services/dashboardService");

const responseHandler = require("../utils/responseHandler");

const MESSAGES = require("../constants/messages");

const asyncHandler = require("../utils/asyncHandler");

const getDashboardSummary = asyncHandler(async (req, res) => {

    const result =
        await dashboardService.getDashboardSummary();

    return responseHandler.success(

        res,

        MESSAGES.DASHBOARD.SUMMARY_FETCHED,

        result

    );

});

const getTaskStatus = asyncHandler(async (req, res) => {

    const result =
        await dashboardService.getTaskStatus();

    return responseHandler.success(
        res,
        MESSAGES.DASHBOARD.TASK_STATUS_FETCHED,
        result
    );

});

const getTaskPriority = asyncHandler(async (req, res) => {

    const result =
        await dashboardService.getTaskPriority();

    return responseHandler.success(
        res,
        MESSAGES.DASHBOARD.TASK_PRIORITY_FETCHED,
        result
    );

});

const getTasksByEmployee = asyncHandler(async (req, res) => {

    const result =
        await dashboardService.getTasksByEmployee();

    return responseHandler.success(
        res,
        MESSAGES.DASHBOARD.TASKS_BY_EMPLOYEE_FETCHED,
        result
    );

});

const getTasksByProject = asyncHandler(async (req, res) => {

    const result =
        await dashboardService.getTasksByProject();

    return responseHandler.success(
        res,
        MESSAGES.DASHBOARD.TASKS_BY_PROJECT_FETCHED,
        result
    );

});

const getRecentTasks = asyncHandler(async (req, res) => {

    const result =
        await dashboardService.getRecentTasks();

    return responseHandler.success(
        res,
        MESSAGES.DASHBOARD.RECENT_TASKS_FETCHED,
        result
    );

});

const getRecentComments = asyncHandler(async (req, res) => {

    const result =
        await dashboardService.getRecentComments();

    return responseHandler.success(
        res,
        MESSAGES.DASHBOARD.RECENT_COMMENTS_FETCHED,
        result
    );

});


module.exports = {

    getDashboardSummary,
    getTaskStatus,
    getTaskPriority,
    getTasksByEmployee,
    getTasksByProject,
    getRecentTasks,
    getRecentComments


};