const { Op } = require("sequelize");

const User = require("./models").user;

const findAll = async () => {
  try {
    const allUsers = await User.findAll({
      where: {},
    });
    console.log(allUsers.map((user) => user.get({ plain: true })));
  } catch (e) {
    console.log(e);
  }
};

findAll();
