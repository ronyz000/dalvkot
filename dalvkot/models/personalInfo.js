var mongoose=require('mongoose')
const Schema=mongoose.Schema
const InfoSchema= new Schema({
	name:{type:String,required:true},
	age:{type:Number,required:true}
})
module.exports=mongoose.model('personalInfo',InfoSchema)
