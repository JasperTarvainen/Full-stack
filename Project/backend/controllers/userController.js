const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//  Steam trade link validation (suggested by AI)
const tradeLinkRegex = /^https:\/\/steamcommunity\.com\/tradeoffer\/new\/\?partner=\d+&token=[A-Za-z0-9_-]+$/


// @desc    Register new user
// @route   POST /api/users
// @acces   Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, steamTradeLink } = req.body

  if (!name || !email || !password || !steamTradeLink) {
    res.status(400)
    throw new Error('Please fill all the fields')
  }

  // Check steam trade links format
  if (!tradeLinkRegex.test(steamTradeLink)) {
    res.status(400)
    throw new Error('Invalid Steam trade link format')
  }

  // Check if user exists by email / steam trade link
  const userExists = await User.findOne({
    $or: [{ email: email}, {steamTradeLink: steamTradeLink}],
  })

  if (userExists) {
    if (userExists.email === email) {
      res.status(400)
      throw new Error(`User with ${email} already exists`)
    }
    if (userExists.steamTradeLink === steamTradeLink) {
      res.status(400)
      throw new Error('This steam trade link is already used by another user')
    }
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    steamTradeLink,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      steamTradeLink: user.steamTradeLink,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})
// @desc    Authenticate a user
// @route   POST /api/users/login
// @acces   Public

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    // Check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
    throw new Error('Invalid email or password')    
    }
})

// @desc    Get user data
// @route   GET /api/users/me
// @acces   Private

const getMe = asyncHandler(async(req, res) => {
    res.status(200).json(req.user)
})

// Update trade link
  const updateTradeLink = asyncHandler(async(req, res) => {
    const { steamTradeLink } = req.body

     if(!steamTradeLink) {
      res.status(400)
      throw new Error('Steam trade link is required')
    }
    if(tradeLinkRegex.test(steamTradeLink)) {
      res.status(400)
      throw new Error('Invalid Steam trade link format')
    }

    // Check if trade link already used by another user

    const userExists = await User.findOne({
      steamTradeLink,
      _id: { $ne: req.user._id},
    });
    if (userExists) {
      res.status(400)
      throw new Error('This steam trade link is already used by another user')
    }

    const updateUser = await User.findByIdAndUpdate(
      req.user._id,
      {steamTradeLink},
      {new: true}).Select('-password')
      res.status(200).json(updateUser)
    })



// Generate Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '7d'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    updateTradeLink,
}