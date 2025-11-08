const asyncHandler = require('express-async-handler')


// @desc    Handle user messages for the chatbot
// @route   POST /api/chat
// @acces   Public

const chatbot = asyncHandler(async(req, res) => {
    const {message} = req.body

    if(!message) {
        res.status(400)
        throw new Error('Please input an message')
    }

    const userMessage = message.toLowerCase()
    let reply = "Sorry, I didn't understand that."

    if (userMessage.includes('hello') || userMessage.includes('hi')) {
        reply =  "Hey there! How can I help you?"
    } else if (userMessage.includes('help')) {
        reply = "Lets see if I can help you. Currently I can tell you about our service."
    } else if (userMessage.includes('service') || userMessage.includes('services')) {
        reply = "We have two different service types. Pro and basic. Pro is for professional use, basic for hobbies, or small businesses who's main contact is not internet."
    } else if (userMessage.includes('bye') || userMessage.includes('thanks') || userMessage.includes('thank you')) {
        reply = "Goodbye, Have a great day!"
    }
    res.status(200).json({reply})
})
module.exports = {
    chatbot,
}
