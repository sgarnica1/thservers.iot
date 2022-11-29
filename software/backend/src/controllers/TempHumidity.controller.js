const TempHumidity = require("../models/TempHumidity");
const MaxMinParams = require("../models/MaxMinParams");

// GET ALL TEMPERATURES AND HUMIDITIES
const getData = async (req, res) => {
  if (req.query.temperature && req.query.humidity && req.query.alarm) {
    createData(req, res);
    return;
  }
  try {
    const data = await TempHumidity.find().sort({ createdAt: - 1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// REGISTER NEW TEMPERATURE, HUMIDITY AND ALARM
const createData = async (req, res) => {
  const data = new TempHumidity({
    temperature: req.query.temperature,
    humidity: req.query.humidity,
    alarm: req.query.alarm,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

// GET MAX AND MIN TEMPERATURE AND HUMIDITY PARAMS SET BY USER
const getMaxMinParams = async (req, res) => {
  try {
    const data = await MaxMinParams.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// SET NEW MAX AND MIN TEMPERATURE AND HUMIDITY PARAMS BY USER
const setMaxMinParams = async (req, res) => {
  const data = new MaxMinParams({
    maxTemp: req.body.maxTemp,
    minTemp: req.body.minTemp,
    maxHum: req.body.maxHum,
    minHum: req.body.minHum,
  });
  try {
    const newData = await data.save();
    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// EXPORT ALL FUNCTIONS
module.exports = {
  getData,
  createData,
  getMaxMinParams,
  setMaxMinParams,
};


// {
//   "maxTemp": 0,
//   "minTemp": 0,
//   "maxHum": 0,
//   "minHum": 0
// }