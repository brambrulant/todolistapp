const { user, todoItem, todoList } = require("./models");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [user],
  });

  return lists.map((list) => list.get({ plain: true }));
}

listsWithUsers().then((lists) => console.log(lists));