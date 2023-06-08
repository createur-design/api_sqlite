const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./../db/database.sqlite", // Replace with the path to your SQLite database file
});

const Chat = sequelize.define(
  "Chat",
  {
    // Model attributes are defined here
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
// console.log(Chat === sequelize.models.Chat); // true

(async () => {
  await sequelize.sync();
  // Code here
})();

module.exports = Chat;
