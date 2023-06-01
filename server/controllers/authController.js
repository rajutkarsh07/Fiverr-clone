const catchAsync = require('../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('./../models/userModel');

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = new User({
    username: 'utk',
    email: 'utk@gmail.com',
    password: '12345678',
    country: 'India',
  });

  await newUser.save();

  return next(new AppError('new user has been created', 500));
});

exports.login = catchAsync(async (req, res, next) => {
  console.log('this is login');

  return next(new AppError('new user has been created', 500));
});

exports.logout = catchAsync(async (req, res, next) => {
  console.log('this is logout');

  return next(new AppError('new user has been created', 500));
});
