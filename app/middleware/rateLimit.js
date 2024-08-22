import rateLimit from "express-rate-limit";

export const appRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 25,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

export const authRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});
