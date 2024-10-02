import express from "express";
import { db } from "./config/db.config";
import { router } from "./Routes/employee.routes";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/employees", router);

// db connection then server connection
db.then(() => {
  app.listen(3002, () => console.log("Server is listening on port 3002"));
});
