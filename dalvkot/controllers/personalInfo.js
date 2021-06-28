console.log('came in')
var personalInfo=require('../models/personalInfo')

exports.createInfo=function(req,res,next){
	var ob=new personalInfo({
			phno:req.body.phno,
	salary:req.body.salary,
	father_name:req.body.father_name,
	user:req.body.user

	})
		ob.save(function(err){
		if(err){
			console.log(err)
			res.json({error:"cant save"})
	}else {
		console.log('success')
		res.json({msg:"personalInfo saved"})
	}
})
}
exports.getInfo=function(req,res,next){
	personalInfo.find(function(err,personalInfo){
		res.json(personalInfo)
	})

}
exports.getInfos=function(req,res,next){
	console.log(req.params)
	personalInfo.findById(req.params.id,function(err,personalInfo){
		res.json(personalInfo)
	})
}
exports.getallInfos=function(req,res,next){
	personalInfo.findAll(function(err,personalInfo){
		res.json(personalInfo)
	})

}
exports.updateInfo=function(req,res,next){
	console.log(req.body)
	personalInfo.findByIdAndUpdate(req.params.id,req.body,function(err){
		if(err)
		res.json(err.toString())
		res.json({status:1,msg:"successfully edited user with id "+req.params.id})
	})
}
