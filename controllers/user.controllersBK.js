const userModel = require("../model/user.model");
const shippingModel = require("../model/shippingAddress.model");
const conn = require("../connection/conn");

exports.register = async (req, res) => {
  const { userInfo, address } = req.body;
  console.log(req.body);

  try {
    const session = await conn.startSession();

    // await session.withTransaction(async () => {

    // });
    const user = await userModel.create([userInfo], { session });
    console.log(user);
    const shipping = await shippingModel.create(
      [{ ...address, userId: user[0]._id }],
      session
    );

    await session.commitTransaction();
    await session.endSession();

    res.json({ status: true, user, shipping });
  } catch (err) {
    //console.error(err);
    await session.abortTransaction();
    session.endSession();

    res.json({ status: false, message: err });
  }
};

exports.getAll = async (req, res) => {
  const result = await userModel.find({});

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
