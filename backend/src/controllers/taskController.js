const taskService = require("../services/taskService");
const TaskRequestDto = require("../DTO/taskRequestDto");
const responseHandler = require("../utils/responseHandler");
const HTTP_STATUS = require("../constants/httpStatusConstants");
const MESSAGES = require("../constants/messages");
const asyncHandler = require("../utils/asyncHandler");

const createTask = asyncHandler(async (req, res) => {

    const taskDto = new TaskRequestDto(req.body);

    const result = await taskService.createTask(taskDto);

    return responseHandler.success(
        res,
        MESSAGES.TASK.TASK_CREATED,
        result,
        HTTP_STATUS.CREATED
    );

});

const getTasks = asyncHandler(async (req, res) => {

    const { page, limit, ...filters } = req.query;

    const result = await taskService.getTasks(
        page,
        limit,
        filters
    );

    return responseHandler.success(
        res,
        MESSAGES.TASK.TASKS_FETCHED,
        result
    );

});

const getTaskById = asyncHandler(async (req, res) => {

    const result = await taskService.getTaskById(
        req.params.id
    );

    return responseHandler.success(
        res,
        MESSAGES.TASK.TASK_FETCHED,
        result
    );

});

const updateTask = asyncHandler(async (req, res) => {

    const result = await taskService.updateTask(
        req.params.id,
        req.body
    );

    return responseHandler.success(
        res,
        MESSAGES.TASK.TASK_UPDATED,
        result
    );

});

const deleteTask = asyncHandler(async (req, res) => {

    const result = await taskService.deleteTask(
        req.params.id
    );

    return responseHandler.success(
        res,
        MESSAGES.TASK.TASK_DELETED,
        result
    );

});

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};