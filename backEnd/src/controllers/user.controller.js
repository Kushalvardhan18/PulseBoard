import User from "../model/User.schema.js"
import crypto from "crypto"


const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const user = await User.create({
            name, email, password
        })
        console.log("User", user);

      
        const token = crypto.randomBytes(32).toString("hex")
        console.log(token);
        user.verificationToken = token
        await user.save()
        res.status(201).json({
            message: "User registered successfully",
            success: true,
             data: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        })
    } catch (error) {
        console.error(error);
        
        res.status(500).json({
            message: "User not registered",
            error: error.message,
            success: false
        })
    }
}


export { registerUser }