import express from "express";
import * as authController from "../controllers/authController";
import * as userController from "../controllers/userController";

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.singin);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    userController.deleteUser
  );

export default router;
