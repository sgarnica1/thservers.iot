const mongoose = require("mongoose");

const MaxMinParamsSchema = new mongoose.Schema(
  {
    maxTemp: {
      type: Number,
      required: true,
      default: 0,
    },
    minTemp: {
      type: Number,
      required: true,
      default: 0,
    },
    maxHum: {
      type: Number,
      required: true,
      default: 0,
    },
    minHum: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MaxMinParams", MaxMinParamsSchema);
