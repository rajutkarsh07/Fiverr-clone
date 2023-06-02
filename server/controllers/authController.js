const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('./../models/userModel');
const bcrypt = require('bcrypt');

exports.signup = catchAsync(async (req, res, next) => {
  const hash = bcrypt.hashSync(req.body.password, 5);
  const newUser = new User({
    ...req.body,
    password: hash,
  });

  await newUser.save();
  res.status(201).send('user created');
});

exports.login = catchAsync(async (req, res, next) => {
  console.log('this is login');

  return next(new AppError('new user has been created', 500));
});

exports.logout = catchAsync(async (req, res, next) => {
  console.log('this is logout');

  return next(new AppError('new user has been created', 500));
});
