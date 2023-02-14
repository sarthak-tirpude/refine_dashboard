import express from "express";
// import all controllers
// logic of the route is in controller, route is just an endpoint
import {
    createUser,
    getAllUsers,
    getUserInfoByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoByID);

export default router;