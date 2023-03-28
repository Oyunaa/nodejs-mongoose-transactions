const { default: mongooose, Schema } = require("mongoose");

const addressSchema = mongooose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    country: {
      type: String,
      required: [true, "Please provide a country!"],
    },
    city: {
      type: String,
      required: [true, "Please provide a city!"],
    },
    streetName: {
      type: String,
      required: [true, "Please provide a streetName!"],
    },
    buildingNumber: {
      type: String,
      required: [true, "Please provide a streetName!"],
    },
    doorNumber: {
      type: String,
      required: [true, "Please provide a streetName!"],
    },
  },
  { timestamps: true }
);

const Address = mongooose.model("ShippingAddress", addressSchema);

module.exports = Address;
