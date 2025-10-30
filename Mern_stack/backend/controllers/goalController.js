// @desc    Get goals
// @route   GET /api/goals
// @acces   Private
const getGoals = async(req, res) => {
    res.status(200).json({message: 'Get goals'})
}
// @desc    Set goals
// @route   POST /api/goals
// @acces   Private
const setGoal = async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error ('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
}
// @desc    update goals
// @route   PUT /api/goals/:id
// @acces   Private
const updateGoal = async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}
// @desc    Delete goals
// @route   DELETE /api/goals
// @acces   Private
const deleteGoal = async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}