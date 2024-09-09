const express  = require('express');
const app = express();
const PORT = 5000;
const bodyParser= require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
// Generate a random secret key

const secretKey = process.env.JWT_SECRET;



//middleware
app.use(cors());
app.use(bodyParser.json());


//open mind learning query schema

const omlformSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    ContactNumber : String,
    Query : String,
});

const Omlform = new mongoose.model('Omlform', omlformSchema);

//mongodb connection
mongoose.connect('mongodb://localhost:27017/OMLQueries')
const db= mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.post('/handlesubmit' , async (req , res) =>{
    try {
        const {Email} =req.body;
        //check if Email is already exists
        const existingEmail = await Omlform.findOne({Email});
        if(existingEmail){
            return res.status(400).json({ message: 'Email already exists. Please choose a different one.' });
        }

        const newFormSave = new Omlform(req.body);
        await newFormSave.save();
        console.log("Record Saved");
        res.status(200).json({ message: 'Query has been received. Our team will contact you soon.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
});




// User Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  
  // Route to create a manual user (for testing)
app.post('/createUser', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// User Login route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Access Denied' });
    try {
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};


// Protected route
app.get('/dashboard', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Welcome to the dashboard', user: req.user });
});






// Start server 
app.listen(PORT, () => { 
    console.log(`Server is running on port: ${PORT}`); 
    });