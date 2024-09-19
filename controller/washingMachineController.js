import {
  getWashingMachine,
  getWashingMachines,
  updateWashingMachine,
} from "../service/washingMachineService.js";

const getAllController = async (req, res) => {
  try {
    const washingMachines = await getWashingMachines();
    res.status(200).json(washingMachines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getController = async (req, res) => {
  try {
    const { id } = req.params;
    const washingMachine = await getWashingMachine(id);

    if (!washingMachine) {
      return res.status(404).json({ message: "Washing machine not found." });
    }

    res.status(200).json(washingMachine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, time } = req.body;

    if (!status || !time) {
      return res
        .status(400)
        .json({ message: "Invalid data. 'status' and 'time' are required." });
    }

    const updatedWashingMachine = await updateWashingMachine(id, status, time);
    console.log(updatedWashingMachine);
    if (!updatedWashingMachine || updatedWashingMachine.length === 0) {
      return res
        .status(404)
        .json({ message: "Washing machine not found or not updated." });
    }

    res.status(200).json(updatedWashingMachine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { updateController, getAllController, getController };
