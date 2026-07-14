require("dotenv").config();

const authRepository = require("../repositories/authRepository");
const { hashPassword } = require("../utils/passwordUtil");

const createAdmin = async () => {

    const existingAdmin =
        await authRepository.findUserByEmail(
            "admin@taskflow.com"
        );

    if (existingAdmin) {

        console.log("Admin already exists.");

        process.exit();

    }

    const hashedPassword =
        await hashPassword("Admin@123");

    await authRepository.createUser({

        name: "System Admin",

        email: "admin@taskflow.com",

        password: hashedPassword,

        role: "ADMIN"

    });

    console.log("Admin created successfully!");
    console.log("Email    : admin@taskflow.com");
    console.log("Password : Admin@123");

    process.exit();

};

createAdmin();