const taskRepository = require("../repositories/taskRepository");
const userRepository = require("../repositories/userRepository");
const projectRepository = require("../repositories/projectRepository");

const TaskResponseDto = require("../DTO/taskResponseDto");

const MESSAGES = require("../constants/messages");

const ApiError = require("../errors/ApiError");
const HTTP_STATUS = require("../constants/httpStatusConstants");

const createTask = async (taskDto) => {

    const employee =
        await userRepository.getEmployeeById(
            taskDto.assignedToId
        );

    if (!employee) {

       throw new ApiError(

    HTTP_STATUS.NOT_FOUND,

    MESSAGES.USER.EMPLOYEE_NOT_FOUND

);

    }

    const project =
        await projectRepository.getProjectById(
            taskDto.projectId
        );

    if (!project) {

       throw new ApiError(

    HTTP_STATUS.NOT_FOUND,

    MESSAGES.PROJECT.PROJECT_NOT_FOUND

);

    }

    const task =
        await taskRepository.createTask(
            taskDto
        );

    return new TaskResponseDto(task);

};

const getTasks = async (
    page,
    limit,
    filters
) => {

    page = Number(page) || 1;

    limit = Number(limit) || 10;

    const skip = (page - 1) * limit;

    const result =
        await taskRepository.getTasks(
            skip,
            limit,
            filters
        );

    return {

        tasks: result.tasks.map(
            task => new TaskResponseDto(task)
        ),

        pagination: {

            page,

            limit,

            totalRecords: result.totalRecords,

            totalPages:
                Math.ceil(
                    result.totalRecords / limit
                )

        }

    };

};

const getTaskById = async (id) => {

    if (isNaN(Number(id))) {

      throw new ApiError(

    HTTP_STATUS.BAD_REQUEST,

    MESSAGES.TASK.INVALID_TASK_ID

);

    }

    const task =
        await taskRepository.getTaskById(id);

    if (!task) {

        throw new ApiError(

    HTTP_STATUS.NOT_FOUND,

    MESSAGES.TASK.TASK_NOT_FOUND

);

    }

    return new TaskResponseDto(task);

};

const updateTask = async (
    id,
    taskData
) => {

    if (isNaN(Number(id))) {

       throw new ApiError(

    HTTP_STATUS.BAD_REQUEST,

    MESSAGES.TASK.INVALID_TASK_ID

);

    }

    const task =
        await taskRepository.getTaskById(id);

    if (!task) {

       throw new ApiError(

    HTTP_STATUS.NOT_FOUND,

    MESSAGES.TASK.TASK_NOT_FOUND

);

    }

    if (taskData.assignedToId) {

        const employee =
            await userRepository.getEmployeeById(
                taskData.assignedToId
            );

        if (!employee) {

           throw new ApiError(

    HTTP_STATUS.NOT_FOUND,

    MESSAGES.USER.EMPLOYEE_NOT_FOUND

);

        }

    }

    if (taskData.projectId) {

        const project =
            await projectRepository.getProjectById(
                taskData.projectId
            );

        if (!project) {

            throw new ApiError(

    HTTP_STATUS.NOT_FOUND,

    MESSAGES.PROJECT.PROJECT_NOT_FOUND

);

        }

    }

    const updatedTask =
        await taskRepository.updateTask(
            id,
            taskData
        );

    return new TaskResponseDto(updatedTask);

};

const deleteTask = async (id) => {

    if (isNaN(Number(id))) {

       throw new ApiError(

    HTTP_STATUS.BAD_REQUEST,

    MESSAGES.TASK.INVALID_TASK_ID

);

    }

    const task =
        await taskRepository.getTaskById(id);

    if (!task) {

        throw new ApiError(

    HTTP_STATUS.NOT_FOUND,

    MESSAGES.TASK.TASK_NOT_FOUND

);

    }

    return await taskRepository.deleteTask(id);

};

module.exports = {

    createTask,

    getTasks,

    getTaskById,

    updateTask,

    deleteTask

};