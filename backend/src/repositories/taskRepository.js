const taskDal = require("../DAL/taskDal");

const createTask = async (taskData) => {

    return await taskDal.createTask(taskData);

};

const getTasks = async (
    skip,
    take,
    filters
) => {

    return await taskDal.getTasks(

        skip,

        take,

        filters

    );

};

const getTaskById = async (id) => {

    return await taskDal.getTaskById(id);

};

const updateTask = async (
    id,
    taskData
) => {

    return await taskDal.updateTask(

        id,

        taskData

    );

};

const deleteTask = async (id) => {

    return await taskDal.deleteTask(id);

};

module.exports = {

    createTask,

    getTasks,

    getTaskById,

    updateTask,

    deleteTask

};