const patchValidationMiddleware = (req, res, next) => {
  const { userId } = req.params;

  // console.log(req.decoded);

  if (req.body.hasOwnProperty("isAdm") && !req.decoded.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  if (userId !== req.decoded.uuid && !req.decoded.isAdm) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default patchValidationMiddleware;
