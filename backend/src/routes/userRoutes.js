const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

const authMiddleware = require("../middlewares/authMiddleware");

const authorize = require("../middlewares/roleMiddleware");

router.post(
    "/",
    authMiddleware,
    authorize("ADMIN"),
    userController.createEmployee
);

router.get(
    "/",
    authMiddleware,
    authorize("ADMIN"),
    userController.getEmployees
);

router.get(
    "/:id",
    authMiddleware,
    authorize("ADMIN"),
    userController.getEmployeeById
);

router.put(
    "/:id",
    authMiddleware,
    authorize("ADMIN"),
    userController.updateEmployee
);

router.delete(
    "/:id",
    authMiddleware,
    authorize("ADMIN"),
    userController.deleteEmployee
);

module.exports = router;