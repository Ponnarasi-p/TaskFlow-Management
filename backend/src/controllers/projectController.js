const projectService = require("../services/projectService");
const ProjectRequestDto = require("../DTO/projectRequestDto");
const responseHandler = require("../utils/responseHandler");
const HTTP_STATUS = require("../constants/httpStatusConstants");
const MESSAGES = require("../constants/messages");
const asyncHandler = require("../utils/asyncHandler");

const createProject = asyncHandler(async (req, res) => {

    const projectDto = new ProjectRequestDto(req.body);

    const result = await projectService.createProject(projectDto);

    return responseHandler.success(
        res,
        MESSAGES.PROJECT.PROJECT_CREATED,
        result,
        HTTP_STATUS.CREATED
    );

});

const getProjects = asyncHandler(async (req, res) => {

    const { page, limit, search } = req.query;

    const result = await projectService.getProjects(
        page,
        limit,
        search
    );

    return responseHandler.success(
        res,
        MESSAGES.PROJECT.PROJECTS_FETCHED,
        result
    );

});

const getProjectById = asyncHandler(async (req, res) => {

    const result = await projectService.getProjectById(
        req.params.id
    );

    return responseHandler.success(
        res,
        MESSAGES.PROJECT.PROJECT_FETCHED,
        result
    );

});

const updateProject = asyncHandler(async (req, res) => {

    const result = await projectService.updateProject(
        req.params.id,
        req.body
    );

    return responseHandler.success(
        res,
        MESSAGES.PROJECT.PROJECT_UPDATED,
        result
    );

});

const deleteProject = asyncHandler(async (req, res) => {

    const result = await projectService.deleteProject(
        req.params.id
    );

    return responseHandler.success(
        res,
        MESSAGES.PROJECT.PROJECT_DELETED,
        result
    );

});

module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
};