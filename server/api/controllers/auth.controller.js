const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, studyFeild } = req.body;

    // *server form validation
    if (!(firstName && lastName && email && password && studyFeild)) {
      return res.status(400).send("all inputs are required");
    }
    //* checking if the user exists
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User already exists, please login");
    }

    //*hashing password
    const hashedPassword = await bcrypt.hash(password, 15);

    // *creating user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      studyFeild,
    });
    res.status(201).send(newUser);
  } catch (err) {
    res.status(err.status || 500).send(err.message || "something went wrong");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //*server form validation
    if (!(email && password)) {
      return res.status(400).send("All inputs are required");
    }

    //* search for user in db
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // *if our user exists and the password is correct we createthe token
      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY);
      res.status(200).cookie("token", token).send("logged in successfully");
    } else {
      return res.status(409).send("incorerct email or password");
    }
  } catch (err) {
    res.status(err.status || 500).send(err.message || "something went wrong");
  }
};

exports.getAccount = async (req, res) => {
  if (req.user) {
    await res.json({ user: req.user });
  } else {
    await res.json({ user: null });
  }
};
