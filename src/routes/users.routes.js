import Router from "express";

import schemaValidationMiddleware from "../middlewares/schemaValidation.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserExistMiddleware from "../middlewares/verifyUserExist.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyPasswordMatchMiddleware from "../middlewares/verifyPasswordMatch.middleware";

import { createUserSchema } from "../schema/createUser.schema";

import createUserController from "../controllers/users/createUser.controller";
import readUsersController from "../controllers/users/readUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import readOneUserController from "../controllers/users/readOneUser.controller";
import patchValidationMiddleware from "../middlewares/patchValidation.middleware";
import deleteValidationMiddleware from "../middlewares/deleteValidation.middleware";

const router = Router();

router.post(
  "",
  schemaValidationMiddleware(createUserSchema),
  verifyEmailAvailabilityMiddleware,
  createUserController
);

router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  readUsersController
);

router.get("/profile", verifyAuthTokenMiddleware, readOneUserController);

router.use("/:userId", verifyAuthTokenMiddleware, verifyUserExistMiddleware);

router.patch("/:userId", patchValidationMiddleware, updateUserController);

router.delete("/:userId", deleteValidationMiddleware, deleteUserController);

export default router;
