import Express from "express";
const app = Express();

import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/post.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from "cors";


//middlewares
app.use(Express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

app.listen(8800, () => {
    console.log("Server is running on port 8800");
});
