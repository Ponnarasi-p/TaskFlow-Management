const express = require("express");

const router = express.Router();

const projectController =
    require("../controllers/projectController");

const authMiddleware =
    require("../middlewares/authMiddleware");

const authorize =
    require("../middlewares/roleMiddleware");

const ROLES =
    require("../constants/roles");

router.post(

    "/",

    authMiddleware,

    authorize(ROLES.ADMIN),

    projectController.createProject

);

router.get(

    "/",

    authMiddleware,

    authorize(ROLES.ADMIN),

    projectController.getProjects

);

router.get(

    "/:id",

    authMiddleware,

    authorize(ROLES.ADMIN),

    projectController.getProjectById

);

router.put(

    "/:id",

    authMiddleware,

    authorize(ROLES.ADMIN),

    projectController.updateProject

);

router.delete(

    "/:id",

    authMiddleware,

    authorize(ROLES.ADMIN),

    projectController.deleteProject

);

module.exports = router;