// Middleware to verify if the JSON body is provided
export const requireJsonBody = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: 'Please provide a JSON body.' });
    }
    next();
};

// Middleware to ensure proper json format
export const requireAnswerField = (req, res, next) => {
    if (!req.body.answer) {
        return res.status(400).send({ error: "The body must contain an 'answer' field." });
    }
    next();
};