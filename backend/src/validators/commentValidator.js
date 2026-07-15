const validateCreateComment = (body) => {

    if (!body.comment?.trim()) {

        throw new Error("Comment is required");

    }

    if (!body.taskId) {

        throw new Error("Task is required");

    }

};

module.exports = {

    validateCreateComment

};