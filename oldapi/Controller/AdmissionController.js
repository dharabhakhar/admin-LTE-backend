var loginmodel = require('../Model/LoginModel');

exports.Login = async (req,res) => {
    
    try {

        var data = await loginmodel.find({"email":req.body.email});

        if(data.length==1)
        {
            if(data[0].password == req.body.password)
            {
                res.status(200).json({
                    status:"Success"
                })
            }
            else
            {
                res.status(200).json({
                    status:"check Your Password",
                })
            }
        }
        else
        {
            res.status(200).json({
                status:"Check Your Email Address",
            })
        }
    } catch (error) {

        res.status(200).json({
            status:"Check Your Internet Connection"
        })

    }
}
