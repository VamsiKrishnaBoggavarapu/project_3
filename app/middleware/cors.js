import cors from "cors";

const allowedOrigins = ["http://localhost:3000", "http://localhost:4000"];

const findOrigin = (origin, callback) => {
  if (!origin || allowedOrigins.find((x) => x === origin)) {
    callback(null, true);
  } else {
    callback(new Error("Not allowed by CORS"));
  }
};

const corsOptions = {
  origin: findOrigin,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Length", "X-Response-Time"],
  credentials: true,
  maxAge: 1000 * 60 * 60 * 24,
  optionsSuccessStatus: 204,
  preflightContinue: false,
};

export default cors(corsOptions);
