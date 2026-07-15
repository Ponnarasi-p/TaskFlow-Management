const validateCreateTask = (body) => {

    if (!body.title) {

        throw new Error("Task title is required");

    }

    if (!body.assignedToId) {

        throw new Error("Assigned employee is required");

    }

    if (!body.projectId) {

        throw new Error("Project is required");

    }

};

module.exports = {

    validateCreateTask

};