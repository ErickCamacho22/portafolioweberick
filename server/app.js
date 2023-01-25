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

app.use(cors({ origin: true, credentials: true }));
// app.use(cors());
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
