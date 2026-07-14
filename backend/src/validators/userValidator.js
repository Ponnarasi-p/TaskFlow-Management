const validateCreateEmployee = (body) => {

    if (!body.name) {

        throw new Error("Name is required");

    }

    if (!body.email) {

        throw new Error("Email is required");

    }

    if (!body.password) {

        throw new Error("Password is required");

    }

};

module.exports = {

    validateCreateEmployee

};