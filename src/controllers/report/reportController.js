import cloudinary from "cloudinary";
import db from "../models";
import validateReportForm from "../../validation/report/validateReportForm"; // Assuming you have validation for creating reports
const Report = db.Report;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createReport = async (req, res) => {
  try {
    const { errors, isValid } = validateReportForm(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { type, details, date } = req.body;

    // Check if attachments are present in the request
    let attachments;
    if (req.file) {
      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      attachments = result.secure_url;
    }

    // Create report
    const report = await Report.create({
      type,
      details,
      date,
      attachments,
    });

    // Log report details to the console
    console.log("New Report:", {
      type,
      details,
      date,
      attachments,
    });

    res.status(201).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const findAllReports = (req, res) => {
  Report.findAll()

    .then((reports) => {
      res.json({ reports });
    })
    .catch((err) => res.status(500).json({ err }));
};

const findReportById = (req, res) => {
  const id = req.params.reportId;

  Report.findByPk(id)
    .then((report) => {
      if (!report) {
        return res.json({ msg: "Report not found" });
      }
      res.json({ report });
    })
    .catch((err) => res.status(500).json({ err }));
};
const updateReport = async (req, res) => {
  try {
    const { errors, isValid } = validateReportForm(req.body);

    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const id = req.params.reportId;
    const { type, details, date } = req.body;

    // Check if attachments are present in the request
    let attachments;
    if (req.file) {
      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      attachments = result.secure_url;
    }

    // Find the report by ID
    const report = await Report.findByPk(id);

    // Check if the report exists
    if (!report) {
      return res.status(404).json({ msg: "Report not found" });
    }

    // Update report details
    report.type = type;
    report.details = details;
    report.date = date;
    report.attachments = attachments;

    // Save the updated report
    await report.save();

    // Log updated report details to the console
    console.log("Updated Report:", {
      type,
      details,
      date,
      attachments,
    });

    res.json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete report
const deleteReport = async (req, res) => {
  try {
    const id = req.params.reportId;

    // Find the report by ID
    const report = await Report.findByPk(id);

    // Check if the report exists
    if (!report) {
      return res.status(404).json({ msg: "Report not found" });
    }

    // Delete the report
    await report.destroy();

    // Log deletion message to the console
    console.log("Report deleted successfully.");

    res.json({ msg: "Report deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  createReport,
  findAllReports,
  findReportById,
  updateReport,
  deleteReport,
};
