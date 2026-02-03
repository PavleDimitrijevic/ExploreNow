import express from 'express';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

import tourRouter from './routes/tourRoutes.js';
import userRotuer from './routes/userRoutes.js';
import reviewRouter from './routes/reviewRoutes.js';
import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';

const app = express();

// 1) Global middlewares

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    'Too many requests from this IP adress, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Static files middleware
// app.use(express.static(path.join(__dirname, 'public')));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRotuer);
app.use('/api/v1/reviews', reviewRouter);

app.use((req, res, next) => {
  next(new AppError(`'Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
