import express from "express";
import userRouter from "./routes/users.routes";
import sessionRouter from "./routes/session.routes";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/users", userRouter);
app.use("/login", sessionRouter);

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));

export default app;
