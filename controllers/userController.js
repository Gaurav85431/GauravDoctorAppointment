const user = require('../models/userModels');
const bcrypt = require('bcrypt')

const Register = async (req, res) => {
    try {

        const existingUser = await user.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send({ success: false, message: `User already Exist` })
        }
        else {
            const password = req.body.password;
            // const sPassword = await bcrypt.hash(password, 10);
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            // req.body.password= hashedPassword;

            const newUser = new user({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
            const saveUser = await newUser.save();
            res.status(200).send({ success: true, message: "Register Successfully ", data: { saveUser } });
        }

    } catch (error) {
        console.log(error);
        return res.status(400).send({ success: false, message: `Register Controller ${error.message}` })
    }
}
const Login = async (req, res) => {
    try {
        res.send("Login");
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    Register, Login
}