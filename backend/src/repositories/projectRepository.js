const projectDal = require("../DAL/projectDal");

const createProject = async (projectData) => {

    return await projectDal.createProject(projectData);

};

const findProjectByName = async (name) => {

    return await projectDal.findProjectByName(name);

};

const getProjects = async (skip, take, search) => {

    return await projectDal.getProjects(

        skip,

        take,

        search

    );

};

const getProjectById = async (id) => {

    return await projectDal.getProjectById(id);

};

const updateProject = async (id, projectData) => {

    return await projectDal.updateProject(

        id,

        projectData

    );

};

const deleteProject = async (id) => {

    return await projectDal.deleteProject(id);

};

module.exports = {

    createProject,

    findProjectByName,

    getProjects,

    getProjectById,

    updateProject,

    deleteProject

};