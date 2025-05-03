import Resource from "../models/Resource.js";

// @desc Get all resources
// @route GET /api/resources
export const getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resources", error });
  }
};

// @desc Add a new resource
// @route POST /api/resources
export const addResource = async (req, res) => {
  try {
    const { title, type, link } = req.body;
    const newResource = new Resource({ title, type, link });
    await newResource.save();
    res.status(201).json({ message: "Resource added successfully", newResource });
  } catch (error) {
    res.status(500).json({ message: "Error adding resource", error });
  }
};
