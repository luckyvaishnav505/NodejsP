const Accounts = require("../models/account-model");
const User = require("../models/user-model");

class UserController {
  static async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const user = new User({ name, email });
      const userData = await user.save();
      const { bankName, accountNumber, bankCode, balance } = req.body;
      const account = new Accounts({
        user: userData._id,
        bankName,
        accountNumber,
        bankCode,
        balance,
      });
      await account.save();
      res.status(200).send({ message: "user created successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: err });
    }
  }

  static async updateUser(req, res) {
    try {
      const updateUserData = req.body;
      const id = req.params.id;
      const info = await Accounts.updateOne(
        { user: id },
        { $set: updateUserData }
      );
      console.log("info:",info);
      res.status(200).send(info);

    } catch (err) {
      console.log(err);
      res.status(400).send({ error: err });
    }
  }
}

module.exports = UserController;
