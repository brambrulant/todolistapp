const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const User = require("./models").user;
const TodoList = require("./models").todoList;

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.listen(port);

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = await User.findByPk(userId);
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});
app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/todoList/:listUserId", async (req, res, next) => {
  const listUserId = parseInt(req.params.listUserId);
  const todoList = await TodoList.findOne({
    where: {
      userId: listUserId,
    },
  });
  if (!todoList) {
    return res.status(404).send("To do list not found");
  } else {
    return res.send(todoList);
  }
});

app.post("/todoList", async (req, res, next) => {
  try {
    const todoList = await TodoList.create(req.body);
    res.json(todoList);
  } catch (e) {
    next(e);
  }
});

app.put("/todoList/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listToUpdate = await TodoList.findByPk(listId);
    if (!listToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    if (user) {
      res.send(user.todoLists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

app.post("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("User not found");
    } else {
      const newList = await TodoList.create({ userId, ...req.body });
      res.json(newList);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listUpdate = await TodoList.findByPk(listId);
    if (!TodoList) {
      res.status(404).send("list not found");
    } else {
      const updated = await listUpdate.update(req.body);
      res.json(updated);
    }
  } catch (e) {
    next(e);
  }
});

app.delete("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listDelete = await TodoList.findByPk(listId);
    if (!TodoList) {
      res.status(404).send("list not found");
    } else {
      await listDelete.destroy();
      res.send("no content");
    }
  } catch (e) {
    next(e);
  }
});
