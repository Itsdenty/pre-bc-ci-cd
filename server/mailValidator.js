
class Validator {
  static contact(req, res, next) {
    req.checkBody('email', 'Please enter a valid email').not().isEmpty().isEmail().isLength({min: 5}).isLength({max:50}).normalizeEmail().trim();
    req.checkBody('title', 'Please supply a valid title').not().isEmpty().isLength({min: 5}).isLength({max:90});
    req.checkBody('message', 'Please supply valid message').not().isEmpty();
    req.asyncValidationErrors()
    .then(next)
    .catch(errors =>  res.status(400).json({status: 400, message: errors.map(err => err.msg).join('|')}))
  }
}

export default Validator;