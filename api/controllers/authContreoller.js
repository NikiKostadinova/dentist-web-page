import  User  from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required!'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });


    try {
        await newUser.save();
        res.json('Signup successful');

    }catch (error){
      next(error);
    }
   
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    

    if(!email || !password || email === "" || password === "") {
        next(errorHandler(400, "All fields are required!"));
    }

    try {
        const validUser = await User.findOne({email});
        if(!validUser) {
            return next(errorHandler(404, "Invalid email or passowrd!"));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) {
           return  next(errorHandler(400, "Invalid email or passowrd!"))
        }
        const token = jwt.sign(
            { id: validUser._id, isAdmin: validUser.isAdmin}, process.env.JWT_SECRET
        );

        const {password: pass, ...rest} = validUser._doc;

        res.status(200).cookie("access_token", token, {
            httpOnly: true
        }).json(rest)
    } catch (error) {
        next(error);
    }
}

