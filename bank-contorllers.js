const Accounts = require("../models/account-model");

class TransactionController {
  static async withdrawMoney(req, res) {
    try {
      const accountNumber = req.body.accountNumber;
      const amount = req.body.amount;
      let userAccountDetails = await Accounts.findOne({
        accountNumber: accountNumber,
      });

      if (!userAccountDetails) {
        return res.status(404).send({ message: "user bank account not found" });
      }
      if (
        userAccountDetails.balance < amount ||
        userAccountDetails.balance - amount < 0
      ) {
        return res.status(400).send({ message: "balance is low" });
      }
      userAccountDetails.balance = userAccountDetails.balance - amount;

      await userAccountDetails.save();

      console.log("withdrawMoney");
      return res.status(200).send({ message: "transaction completed" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: err });
    }
  }

  static async depositMoney(req, res) {
    try {
      const { accountNumber, amount } = req.body;
      await Accounts.updateOne(
        { accountNumber },
        { $inc: { balance: amount } }
      );
      res.status(200).send({ message: "transaction completed" });
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: err });
    }
  }
}

module.exports = TransactionController;
