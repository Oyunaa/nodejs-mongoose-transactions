const { default: mongooose } = require("mongoose");

const userSchema = mongooose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide a firstname!"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide a lastname!"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide a phoneNumber!"],
      unique: true,
    },
    email: String,
  },
  { timestamps: true }
);

const User = mongooose.model("User", userSchema);

module.exports = User;
