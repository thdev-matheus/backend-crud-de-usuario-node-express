const schemaValidationMiddleware = (schema) => async (req, res, next) => {
  try {
    const validated = await schema.validate(req.body);
    req.body = validated;
    next();
  } catch (err) {
    return res.status(400).json({ message: err.errors.join(", ") });
  }
};

export default schemaValidationMiddleware;
