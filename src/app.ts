import express, { Application } from "express";
import "./database/connection";
import adminSeeder from "./services/adminSeeding";
import * as dotenv from "dotenv";
import userRoute from "./routes/userRoutes";
import adminProductRoute from "./routes/productRoutes";
import categoryController from "./controller/categoryController";
import categoryRoute from "./routes/categoryRoutes";
import addTocartRoute from "./routes/cartRoutes";
const app: Application = express();
const PORT: number = 3000;
dotenv.config();

app.use(express.json());

//admin seeding
adminSeeder();

app.use("", userRoute);
app.use("/admin/product", adminProductRoute);
app.use("/admin/", categoryRoute);
app.use("/customer/cart", addTocartRoute);

app.listen(PORT, () => {
  // categoryController.seedCategory();
  console.log(`Server has Started in ${PORT}`);
});
