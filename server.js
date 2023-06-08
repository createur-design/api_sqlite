const app = require("express")();
const Chat = require("./models/chat");

const { Sequelize } = require("sequelize");

console.log("Hello from server!");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

app.get("/", async (req, res) => {
  // const chat = await Chat.build({
  //   question: "comment ça va ?",
  //   answer: "bien et toi ?",
  // });
  // await chat.save();
  // console.log(chat);
  const allChats = await Chat.findAll();
  console.log(allChats);
  res.json({ message: "Hello Wordl!", data: allChats });
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(3333, () => {
      console.log("server starting...");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
