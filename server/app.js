import express from "express";
import { createRoles } from "./libs/initialSetup.js";
import postRoutes from "./routes/post.routes.js";
import fileUpload from "express-fileupload";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
createRoles();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};
app.use(allowCors(handler));
app.use(cors());
//middlewares
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

//routes
app.use(postRoutes);
app.use(authRoutes);
app.use(userRoutes);

console.log(__dirname);

app.use(express.static(join(__dirname, "../client/build")));

export default app;
