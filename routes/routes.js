import express from "express";
import {
  getAllController,
  updateController,
  getController,
} from "../controller/washingMachineController.js";

const router = express.Router();

router.get("/", getAllController);
router.get("/:id", getController);
router.put("/:id", updateController);

export default router;
