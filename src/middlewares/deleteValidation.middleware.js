const deleteValidationMiddleware = (req, res, next) => {
  const { userId } = req.params;

  if (userId !== req.decoded.id && !req.decoded.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default deleteValidationMiddleware;
