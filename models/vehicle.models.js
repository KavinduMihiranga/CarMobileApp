const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module .exports=mongoose.model('Vehicle',vehicleSchema)