// controllers/airtimeRechargeController.js
import db from "../models";

const AirtimeRecharge = db.AirtimeRecharge;

const createAirtimeRecharge = async (req, res) => {
  try {
    const airtimeRechargeData = req.body;

    // Create AirtimeRecharge
    const airtimeRecharge = await AirtimeRecharge.create(airtimeRechargeData);

    res.status(201).json(airtimeRecharge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateAirtimeRecharge = async (req, res) => {
  try {
    const airtimeRechargeId = req.params.id;
    const updatedData = req.body;

    // Find the AirtimeRecharge by ID
    const airtimeRecharge = await AirtimeRecharge.findByPk(airtimeRechargeId);

    if (!airtimeRecharge) {
      return res.status(404).json({ msg: "AirtimeRecharge not found" });
    }

    // Update AirtimeRecharge details
    await airtimeRecharge.update(updatedData);

    res.json(airtimeRecharge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteAirtimeRecharge = async (req, res) => {
  try {
    const airtimeRechargeId = req.params.id;

    // Find the AirtimeRecharge by ID
    const airtimeRecharge = await AirtimeRecharge.findByPk(airtimeRechargeId);

    if (!airtimeRecharge) {
      return res.status(404).json({ msg: "AirtimeRecharge not found" });
    }

    // Delete the AirtimeRecharge
    await airtimeRecharge.destroy();

    res.json({ msg: "AirtimeRecharge deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAirtimeRechargeById = async (req, res) => {
  try {
    const airtimeRechargeId = req.params.id;

    // Find the AirtimeRecharge by ID
    const airtimeRecharge = await AirtimeRecharge.findByPk(airtimeRechargeId);

    if (!airtimeRecharge) {
      return res.status(404).json({ msg: "AirtimeRecharge not found" });
    }

    res.json(airtimeRecharge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllAirtimeRecharges = async (req, res) => {
  try {
    // Fetch all AirtimeRecharges
    const airtimeRecharges = await AirtimeRecharge.findAll();

    res.json({ airtimeRecharges });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {
  createAirtimeRecharge,
  updateAirtimeRecharge,
  deleteAirtimeRecharge,
  getAirtimeRechargeById,
  getAllAirtimeRecharges,
};
