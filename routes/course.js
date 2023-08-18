var express = require('express');
const {checkToken} = require('../middleware/auth');
const {Add_Course,View_Course,Delete_Course,Get_Single_Course,updat_course,update_course,Add_Course_content, View_All_Course} = require('../Controller/CourseController');
var router = express.Router();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true    
    optionSuccessStatus:200
}
router.use(cors());
router.post('/AddCourse',checkToken,Add_Course);

router.get('/ViewCourse',checkToken,View_Course);

router.get('/View_All_Course',checkToken,View_All_Course);

router.delete('/Delete_Course/:id',checkToken,Delete_Course);

router.get('/Get_Single_Course/:id',checkToken,Get_Single_Course);

router.get('/update_course/:id',checkToken,update_course);

router.post('/update_course/:id',checkToken,updat_course);

router.post('/AddCourse',checkToken,Add_Course);

router.post('/coursecontent',checkToken,Add_Course_content);

module.exports = router;