var express = require('express');
const {Login} = require('../Controller/LoginController');
const {checkToken} = require('../middleware/auth');
const {Add_Course} = require('../Controller/CourseController');
var router = express.Router();
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
router.use(cors(corsOptions));

router.post('/Login',Login);
router.post('/AddCourse',checkToken,Add_Course);


module.exports = router;
