const projectRepository = require("../repositories/projectRepository");

const ProjectResponseDto = require("../DTO/projectResponseDto");

const MESSAGES = require("../constants/messages");

const createProject = async (projectDto) => {

    const existingProject =
        await projectRepository.findProjectByName(
            projectDto.name
        );

    if (existingProject) {

        throw new Error(
            MESSAGES.PROJECT.PROJECT_ALREADY_EXISTS
        );

    }

    const project =
        await projectRepository.createProject(
            projectDto
        );

    return new ProjectResponseDto(project);

};

const getProjects = async (page, limit, search) => {

    page = Number(page) || 1;

    limit = Number(limit) || 10;

    const skip = (page - 1) * limit;

    const result =
        await projectRepository.getProjects(
            skip,
            limit,
            search
        );

    return {

        projects: result.projects,

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

const getProjectById = async (id) => {

    if (isNaN(Number(id))) {

        throw new Error(
            MESSAGES.PROJECT.INVALID_PROJECT_ID
        );

    }

    const project =
        await projectRepository.getProjectById(id);

    if (!project) {

        throw new Error(
            MESSAGES.PROJECT.PROJECT_NOT_FOUND
        );

    }

    return project;

};

const updateProject = async (
    id,
    projectData
) => {

    if (isNaN(Number(id))) {

        throw new Error(
            MESSAGES.PROJECT.INVALID_PROJECT_ID
        );

    }

    const project =
        await projectRepository.getProjectById(id);

    if (!project) {

        throw new Error(
            MESSAGES.PROJECT.PROJECT_NOT_FOUND
        );

    }

    if (
        projectData.name &&
        projectData.name !== project.name
    ) {

        const existingProject =
            await projectRepository.findProjectByName(
                projectData.name
            );

        if (existingProject) {

            throw new Error(
                MESSAGES.PROJECT.PROJECT_ALREADY_EXISTS
            );

        }

    }

    const updatedProject =
        await projectRepository.updateProject(
            id,
            projectData
        );

    return new ProjectResponseDto(
        updatedProject
    );

};

const deleteProject = async (id) => {

    if (isNaN(Number(id))) {

        throw new Error(
            MESSAGES.PROJECT.INVALID_PROJECT_ID
        );

    }

    const project =
        await projectRepository.getProjectById(id);

    if (!project) {

        throw new Error(
            MESSAGES.PROJECT.PROJECT_NOT_FOUND
        );

    }

    return await projectRepository.deleteProject(
        id
    );

};

module.exports = {

    createProject,

    getProjects,

    getProjectById,

    updateProject,

    deleteProject

};