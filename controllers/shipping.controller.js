const shippingModel = require("../model/shippingAddress.model");
const conn = require("../connection/conn");

exports.create = async (req, res) => {
  // req.body;
  const { data } = req.body;
  console.log(req.body);

  try {
    const result = await shippingModel.insertMany(data);

    res.json({ status: true, result });
  } catch (err) {
    console.error(err);

    res.json({ status: false, message: err });
  }
};

exports.getAll = async (req, res) => {
  const result = await shippingModel.find({});

  if (result) {
    res.status(200).send({
      status: true,
      result,
    });
    return;
  } else {
    res.status(500).send({
      status: false,
      message: "Baazad hereglegch bhgui bna",
    });
    return;
  }
};
