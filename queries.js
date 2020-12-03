// const User = require("./models").user;
// const TodoItem = require("./models").todoItem;
// const { Op } = require("sequelize");

// async function findAllUsers() {
//   try {
//     const allUsers = await User.findAll({ where: {} });
//     console.log(
//       "All users: ",
//       allUsers.map((user) => user.get({ plain: true }))
//     );
//   } catch (e) {
//     console.log(e);
//   }
// }
// // findAllUsers();

// async function findAllTodoItems() {
//   try {
//     const allTodoItems = await TodoItem.findAll({ where: { important: true } });
//     console.log(
//       "All to do items: ",
//       allTodoItems.map((toDoItem) => todoItem.get({ plain: true }))
//     );
//   } catch (e) {
//     console.log(e);
//   }
// }
// findAllTodoItems();

// async function findByPK(id) {
//   try {
//     const user = await User.findByPk(id);
//     if (user === null) {
//       console.log("not found");
//     } else {
//       console.log("Find by pk:", user.get({ plain: true }));
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
// // findByPK(3);

// async function addUser() {
//   try {
//     const newUser = User.create({
//       name: "Bram",
//       email: "bram@bram.nl",
//       phone: 24567,
//       password: "hallo",
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }
// // addUser();

// async function findImportantItems() {
//   try {
//     const importantItems = TodoItem.findAll({
//       where: {},
//     });
//     console.log("what is importantItems", importantItems);
//   } catch (e) {
//     console.log(e);
//   }
// }
// // findImportantItems();
