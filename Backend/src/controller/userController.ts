import { Request, Response } from "express";
import User from "../database/models/userModels";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class AuthController {
  public static async registerUser(req: Request, res: Response): Promise<void> {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({
        message: "Please Provide Email ,Password ,Username ",
      });
      return;
    }
    const data = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 8),
      role: role,
    });
    res.status(200).json({
      message: "User Registered Successfully !",
      data,
    });
  }
  public static async loginUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "Please Provide Email ,Password !",
      });
    }
    const [data] = await User.findAll({
      where: {
        email,
      },
    });
    if (!data) {
      res.status(404).json({
        message: "No User With this email",
      });
      return;
    }
    const isMatched = bcrypt.compareSync(password, data.password);
    if (!isMatched) {
      res.status(403).json({
        message: "Invalid Email or Password !",
      });
    } else {
      //token
      const token = jwt.sign({ id: data.id }, process.env.secretkey as string, {
        expiresIn: "20d",
      });
      res.status(200).json({
        message: "User Logged In Successfully !!",
        token: token,
      });
    }
  }
}
export default AuthController;
