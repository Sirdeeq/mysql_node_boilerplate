import express from "express";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import {
  createAirtime,
  findAllAirtimes,
  findAirtimeById,
  updateAirtime,
  deleteAirtime,
} from "../controllers/airtime"; // Make sure to import the appropriate controller functions

const router = express.Router();

// Create a new airtime
router.post(
  "/api/airtime/create",
  allowOnly(config.accessLevels.admin, createAirtime)
);

// Retrieve all airtimes
router.get(
  "/api/airtime",
  allowOnly(config.accessLevels.admin, findAllAirtimes)
);

// Retrieve airtime by id
router.get(
  "/api/airtime/:airtimeId",
  allowOnly(config.accessLevels.admin, findAirtimeById)
);

// Update an airtime with id
router.put(
  "/api/airtime/:airtimeId",
  allowOnly(config.accessLevels.admin, updateAirtime)
);

// Delete an airtime
router.delete(
  "/api/airtime/:airtimeId",
  allowOnly(config.accessLevels.admin, deleteAirtime)
);

export default router;
