import express from "express";
import multer from "multer";
import {
  createReport,
  findAllReports,
  findReportById,
  updateReport,
  deleteReport,
} from "../../controllers/report/reportController";
import validateReportForm from "../../validation/report/validateReportForm";

const router = express.Router();

// Multer setup for handling file uploads
const storage = multer.memoryStorage(); // Store file in memory for Cloudinary upload
const upload = multer({ storage: storage });

// Create Report route
router.post(
  "/api/reports/create",
  upload.single("attachment"),
  async (req, res) => {
    try {
      // Validate the report form data
      const { errors, isValid } = validateReportForm(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      // Call the createReport function from the controller
      await createReport(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// Fetch all reports route
router.get("/api/reports/all", async (req, res) => {
  try {
    // Call the findAllReports function from the controller
    await findAllReports(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch report by ID route
router.get("/api/reports/:reportId", async (req, res) => {
  try {
    // Call the findReportById function from the controller
    await findReportById(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update report route
router.put("/api/reports/update/:reportId", async (req, res) => {
  try {
    // Call the updateReport function from the controller
    await updateReport(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete report route
router.delete("/api/reports/delete/:reportId", async (req, res) => {
  try {
    // Call the deleteReport function from the controller
    await deleteReport(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
