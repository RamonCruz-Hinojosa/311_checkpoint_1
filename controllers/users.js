const users = require("../data/index");
const sampleuser = require("../data/sampleUser");

const list = (req, res) => {
  if (!users.length) {
    res.status(404).send("No users found");
  }
  return res.json(users);
};

const get = (req, res) => {
  const found = users.some((user) => user.id === Number(req.params.id));
  if (found) {
    res.json(users.find((user) => user.id === Number(req.params.id)));
  } else {
    res.status(404).send("user by that id not found");
  }
};

const create = (req, res) => {
  const id = users[users.length - 1].id + 1;
  const newuser = req.body;
  newuser.id = id;
  users.push(newuser);
  return res.json(users);
};

const update = (req, res) => {
  let searchUser = users.findIndex((user) => user.id === Number(req.params.id));

  if (searchUser === -1) {
    res.status(404).send("user by that id not found");
  } else {
    const updMember = req.body;
    users.forEach((user) => {
      if (user.id === Number(req.params.id)) {
        const updUser = Object.assign(user, updMember);
        res.json({ msg: "User updated", user });
      }
    });
  }
};

const deleteUser = (req, res) => {
  let index = users.findIndex((user) => user.id === Number(req.params.id));
  console.log(index);
  if (index === -1) {
    res.status(400).send("user by that id does not exist");
  } else {
    res.json({
      msg: `User with name ${users[index]["name"]} and id of ${req.params.id} deleted`,
      users: users.filter((user) => user.id !== Number(req.params.id)),
    });
    users.splice(index, 1);
  }
};

module.exports = {
  list,
  get,
  create,
  update,
  deleteUser,
};
