
const express = require('express');
const yup = require('yup');
const { schema } = require('../middlewares/schema');

class validationMiddleware {

    validate = (schema) => async (req, res, next) => {
        try {
            await schema.validate(req.body, { abortEarly: false });
            next();
        } catch (error) {
            res.status(400).json({ errors: error.errors });
        }
    };

}

module.exports = validationMiddleware;