const { userModel } = require("../models/user");

const getUser = (req, res) => {
  const { id } = req.params;
  let userResult;
  console.log(id);

  userModel()
    .then((response) => {
      userResult = response.find((element) => element.id == id)
        ? response.find((element) => element.id == id)
        : "Not Found";

      return res.status(200).send(userResult);
    })
    .catch((error) => res.status(500).send({ error }));
};

const getUsers = (req, res) => {
  userModel()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(500).send({ err }));
};

const getUserBy = (req, res) => {
  return res.send("Return user by..");
};

const searchUser = (req, res) => {
  const { name } = req.params;
  console.log(name);
  let userResult = {};

  userModel()
    .then((response) => {
      userResult = response.find(element => 
        element.name.toLowerCase().search(name.toLowerCase()) != -1
    )
      userResult = userResult ? userResult : {};
      res.status(200).send(userResult);
    
    })
    .catch((error) => res.status(500).send({ error }));
};

module.exports = { getUser, getUsers, getUserBy, searchUser };
