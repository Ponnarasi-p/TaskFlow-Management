const express = require("express");

const router = express.Router();

const taskController = require("../controllers/taskController");

const authMiddleware = require("../middlewares/authMiddleware");

const authorize = require("../middlewares/roleMiddleware");

const ROLES = require("../constants/roles");

const commentController = require("../controllers/commentController");

router.post(
    "/",
    authMiddleware,
    authorize(ROLES.ADMIN),
    taskController.createTask
);

router.get(
    "/",
    authMiddleware,
    authorize(ROLES.ADMIN),
    taskController.getTasks
);

router.get(
    "/:id",
    authMiddleware,
    authorize(ROLES.ADMIN),
    taskController.getTaskById
);

router.put(
    "/:id",
    authMiddleware,
    authorize(ROLES.ADMIN),
    taskController.updateTask
);

router.delete(
    "/:id",
    authMiddleware,
    authorize(ROLES.ADMIN),
    taskController.deleteTask
);

router.post(

    "/:taskId/comments",

    authMiddleware,

    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),

    commentController.createComment

);

router.get(

    "/:taskId/comments",

    authMiddleware,

    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),

    commentController.getCommentsByTaskId

);

module.exports = router;