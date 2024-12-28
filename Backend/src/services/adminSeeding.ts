import User from "../database/models/userModels";
import bcrypt from "bcrypt";
const adminSeeder = async (): Promise<void> => {
  const [data] = await User.findAll({
    where: {
      email: "p2admin@gmail.com",
    },
  });
  if (!data) {
    await User.create({
      email: "p2admin@gmail.com",
      password: bcrypt.hashSync("p2admin", 8),
      username: "p2admin",
      role: "admin",
    });
    console.log("admin credentials seeded successfully !!");
  } else {
    console.log("admin seeded already !");
  }
};
export default adminSeeder;
