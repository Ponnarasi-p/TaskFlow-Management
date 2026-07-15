const express = require("express");

const router = express.Router();

const dashboardController =
require("../controllers/dashboardController");

const authMiddleware =
require("../middlewares/authMiddleware");

const authorize =
require("../middlewares/roleMiddleware");

const ROLES =
require("../constants/roles");

router.get(

    "/summary",

    authMiddleware,

    authorize(

        ROLES.ADMIN,

        ROLES.EMPLOYEE

    ),

    dashboardController.getDashboardSummary

);

router.get(
    "/task-status",
    authMiddleware,
    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),
    dashboardController.getTaskStatus
);

router.get(
    "/task-priority",
    authMiddleware,
    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),
    dashboardController.getTaskPriority
);

router.get(
    "/tasks-by-employee",
    authMiddleware,
    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),
    dashboardController.getTasksByEmployee
);

router.get(
    "/tasks-by-project",
    authMiddleware,
    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),
    dashboardController.getTasksByProject
);

router.get(
    "/recent-tasks",
    authMiddleware,
    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),
    dashboardController.getRecentTasks
);

router.get(
    "/recent-comments",
    authMiddleware,
    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),
    dashboardController.getRecentComments
);

module.exports = router;