const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Gig = require('./../models/gigModel');

exports.deleteGig = catchAsync(async (req, res, next) => {
  const gig = await Gig.findById(req.params.id);

  if (gig.userId !== req.userId) {
    return next(new AppError('You can only delete your own gig', 403));
  }

  await Gig.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: 'success',
    message: 'Gig deleted successfully',
  });
});

exports.createGig = catchAsync(async (req, res, next) => {
  if (!req.isSeller) {
    return next(new AppError('Only seller can create gig', 403));
  }

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  const savedGig = await newGig.save();

  res.status(200).json({
    status: 'success',
    savedGig,
  });
});

exports.getGig = catchAsync(async (req, res, next) => {
  const gig = await Gig.findById(req.params.id);

  if (!gig) {
    return next(new AppError('Gig not found', 404));
  }

  res.status(200).json({
    status: 'success',
    gig,
  });
});

exports.getGigs = catchAsync(async (req, res, next) => {
  const que = req.query;
  const filters = {
    ...(que.userId && { userId: que.userId }),
    ...(que.search && { title: { $regex: que.search, $options: 'i' } }),
    ...(que.cat && { cat: que.cat }),
    ...((que.min || que.max) && {
      price: {
        ...(que.min && { $gt: que.min }),
        ...(que.max && { $lt: que.max }),
      },
    }),
  };

  const gigs = await Gig.find(filters).sort({ [que.sort]: -1 });

  if (!gigs) {
    return next(new AppError('Gigs not found', 404));
  }

  res.status(200).json({
    status: 'success',
    gigs,
  });
});
