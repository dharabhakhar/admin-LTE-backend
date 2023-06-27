var jwt = require('jsonwebtoken');
var validator = require('validator');

exports.checkToken = async (req,res,next) => {

        jwt.verify(req.headers.authorization,'cdmi',next);
}