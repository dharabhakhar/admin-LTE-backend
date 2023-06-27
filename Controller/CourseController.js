var coursemodel = require('../Model/CourseModel');
var course_contentModel = require('../Model/CourseContent');

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

exports.View_Course = async (req,res) => {

    try {

        var limit=5;
        
        var page_no = req.query.page_no;

        if(page_no==undefined)
        {
            page_no = 1;
        }

        var start = (page_no-1)*limit;

        var data = await coursemodel.find().skip(start).limit(limit);

    
        var total_record = await coursemodel.find().count();
        var totalpage = Math.ceil(total_record/5)
        res.status(200).json({
            status:"Success",
            data,
            totalpage,
            total_record,limit,page_no
         }) 

    } catch (error) {
       
        res.status(200).json({
           error
        }) 
    }
}

exports.Delete_Course = async (req,res) => {

    try {

        var id = req.params.id;
        console.log(id);
        var data = await coursemodel.findByIdAndDelete(id);

        res.status(200).json({
            status:"Success",
           
         }) 

    } catch (error) {
       
        res.status(200).json({
           error
        }) 
    }
}

exports.Get_Single_Course = async (req,res) => {

    try {

        var id = req.params.id;
        var data = await coursemodel.findById(id);

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

exports.update_course = async (req,res) => {

    try {

        var id = req.params.id;
        var data = await coursemodel.findById(id);

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

exports.updat_course = async (req,res) => {

    try {

        var id = req.params.id;

        var data = await coursemodel.findByIdAndUpdate(id,req.body,{new: true});

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

exports.Add_Course_content = async (req,res) => {

    try {

        var content_data = await course_contentModel.find({"course_id":req.body.course_id});
        
        if(content_data.length == 0)
        {
            var data = await course_contentModel.create(req.body);
            res.status(200).json({
                status:"Success",
                data
            })
        }
        else
        {
            var old_course = "";
            old_course = content_data[0].courscontent;
            old_course = old_course+','+req.body.courscontent;

            var obj = {
                courscontent:old_course
            }

            var  content_update = await course_contentModel.findByIdAndUpdate(content_data[0].id,obj,{new:true})

            res.status(200).json({
                status:"course content updated",
                content_update
            })
        }

    } catch (error) {
       
        res.status(200).json({
           error
        }) 
    }
}