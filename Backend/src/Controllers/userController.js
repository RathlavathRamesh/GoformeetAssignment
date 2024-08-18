import User from "../Models/userModel.js";

const createUser = async (req, res) => {
     
    // console.log("Api Called from the NEW USER");
    // return res.status(200).json({ message: "createUserApi Called" });
    const { name, age, location, profession } = req.body;
    console.log(name, age, location, profession);
    if (!name || !age || !location || !profession) {
        return res.status(400).json({ message: 'Please fill out all fields' });
    }
    try {
        const newUser = new User({ name, age, location, profession });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getUsers = async (req, res) => {
    console.log("get api called");
    try {
        const users = await User.find().sort({ location: 1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export { createUser, getUsers };