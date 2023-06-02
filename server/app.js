const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const userRouter = require('./routes/userRoutes');
// const conversationRouter = require('./routes/conversationRoutes');
// const gigRouter = require('./routes/gigRoutes');
// const messageRouter = require('./routes/messageRoutes');
// const orderRouter = require('./routes/orderRoutes');
// const reviewRouter = require('./routes/reviewRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // means 100 request per hour
  message: 'To many request from this IP, try again after an hour',
});

app.use('/api', limiter); // this middleware will be applied to only those routes whose url starts with /api
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use((req, res, next) => {
  req.requestTIme = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use('/api/users', userRouter);
// app.use('/api/conversation', conversationRouter);
// app.use('/api/gig', gigRouter);
// app.use('/api/message', messageRouter);
// app.use('/api/order', orderRouter);
// app.use('/api/review', reviewRouter);
app.use('/api/auth', authRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
