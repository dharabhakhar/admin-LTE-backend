var coursemodel = require('../Model/CourseModel');

exports.Add_Course = async (req,res) => {

    try {

        var data = await coursemodel.create(req.body);

        res.status(200).json({
            status:"Success",
            data
         }) 

    } catch (error) {
       
        res.status(200).json({
           error
        }) 
    }
}