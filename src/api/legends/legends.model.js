const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const legendsSchema = new Schema(
  {
    name: { type: String, required: true },
    card: {type: String},
    detail: {type: String},
    tacticLogo: {type: String},
    passiveLogo: {type: String},
    ultimateLogo: {type: String},
    info: { type: String},
    skills: { type: Object},
  },
  {
    timestamps: true,
  }
);

const Legend = mongoose.model('characters', legendsSchema);

module.exports = Legend;