const User = require('../models').User
const to = require('await-to-js').default
const bcrypt = require("bcryptjs");
const jwtParams = require("../config/jwt");
const jwt = require("jsonwebtoken");

module.exports = {
  signin: async (req, res) => {
    const [err, user] = await to(User.findOne({
        where: {
            username: req.body.username
        }
    }))
    if (err) {
        throw err;
    }
    if (!user) {
        return res.status(404).send({ message: "User Not found." });
    }
    const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    );
    if (!passwordIsValid) {
        return res.status(401).send({
          message: "Invalid Password!"
        });
      }

    const token = jwt.sign({ id: user.id }, jwtParams.secret, {
        expiresIn: 86400 // 24 hours
    });

    return res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token
    });
  },
  signup: async (req, res) => {
    const [err, user] = await to(User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }))
    if (err) return res.status(500).send(err)
    if (user) return res.status(200).send({ message: 'Успешно зареган!'})
  },
}