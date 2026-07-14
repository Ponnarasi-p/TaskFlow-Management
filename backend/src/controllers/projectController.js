const projectService =
    require("../services/projectService");

const ProjectRequestDto =
    require("../DTO/projectRequestDto");

const responseHandler =
    require("../utils/responseHandler");

const HTTP_STATUS =
    require("../constants/httpStatusConstants");

const MESSAGES =
    require("../constants/messages");

const createProject = async (
    req,
    res
) => {

    try {

        const projectDto =
            new ProjectRequestDto(req.body);

        const result =
            await projectService.createProject(
                projectDto
            );

        return responseHandler.success(

            res,

            MESSAGES.PROJECT.PROJECT_CREATED,

            result,

            HTTP_STATUS.CREATED

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message,

            HTTP_STATUS.BAD_REQUEST

        );

    }

};

const getProjects = async (
    req,
    res
) => {

    try {

        const {
            page,
            limit,
            search
        } = req.query;

        const result =
            await projectService.getProjects(
                page,
                limit,
                search
            );

        return responseHandler.success(

            res,

            MESSAGES.PROJECT.PROJECTS_FETCHED,

            result

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message

        );

    }

};

const getProjectById = async (
    req,
    res
) => {

    try {

        const result =
            await projectService.getProjectById(
                req.params.id
            );

        return responseHandler.success(

            res,

            MESSAGES.PROJECT.PROJECT_FETCHED,

            result

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message,

            HTTP_STATUS.NOT_FOUND

        );

    }

};

const updateProject = async (
    req,
    res
) => {

    try {

        const result =
            await projectService.updateProject(
                req.params.id,
                req.body
            );

        return responseHandler.success(

            res,

            MESSAGES.PROJECT.PROJECT_UPDATED,

            result

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message,

            HTTP_STATUS.BAD_REQUEST

        );

    }

};

const deleteProject = async (
    req,
    res
) => {

    try {

        const result =
            await projectService.deleteProject(
                req.params.id
            );

        return responseHandler.success(

            res,

            MESSAGES.PROJECT.PROJECT_DELETED,

            result

        );

    }

    catch (error) {

        return responseHandler.error(

            res,

            error.message,

            HTTP_STATUS.BAD_REQUEST

        );

    }

};

module.exports = {

    createProject,

    getProjects,

    getProjectById,

    updateProject,

    deleteProject

};