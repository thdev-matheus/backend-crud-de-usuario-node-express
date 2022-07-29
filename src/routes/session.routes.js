import Router from "express";

import verifyLoginEmailExistMiddleware from "../middlewares/verifyLoginEmailExist.middleware";
import verifyPasswordMatchMiddleware from "../middlewares/verifyPasswordMatch.middleware";

import loginUserController from "../controllers/login/loginUser.controller";

const router = Router();

router.post(
  "",
  verifyLoginEmailExistMiddleware,
  verifyPasswordMatchMiddleware,
  loginUserController
);

export default router;
