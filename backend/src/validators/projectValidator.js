const validateCreateProject = (body) => {

    if (!body.name) {

        throw new Error("Project name is required");

    }

};

module.exports = {

    validateCreateProject

};