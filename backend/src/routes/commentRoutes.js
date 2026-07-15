const express = require("express");

const router = express.Router();

const commentController = require("../controllers/commentController");

const authMiddleware = require("../middlewares/authMiddleware");

const authorize = require("../middlewares/roleMiddleware");

const ROLES = require("../constants/roles");

router.put(

    "/:id",

    authMiddleware,

    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),

    commentController.updateComment

);

router.delete(

    "/:id",

    authMiddleware,

    authorize(ROLES.ADMIN, ROLES.EMPLOYEE),

    commentController.deleteComment

);

module.exports = router;