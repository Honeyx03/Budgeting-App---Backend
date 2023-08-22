const validateBudgetData = (req, res, next) => {
    const { item_name, amount, isDeduction, date, category } = req.body;

    if (
        typeof item_name === 'string' &&
        typeof amount === 'number' &&
        typeof isDeduction === 'boolean' &&
        typeof date === 'string' &&
        typeof category === 'string'
    ) {
        return next();
    } else {
        res.status(400).send("Invalid budget data");
    }
};

//EXPORT
module.exports = { validateBudgetData };