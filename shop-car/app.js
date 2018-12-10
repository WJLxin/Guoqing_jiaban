var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var postparser=bodyparser.urlencoded({extended:false});
const dbb=require("./js/db-ysp.js");
const db=new dbb("shoping");

app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*");
	next()
});

app.post("/add",postparser,function(req,res){
	var obj=req.body;
	db.insertOne("shopcar",obj,function(err){
		if (err) {
			res.send("添加失败")
		}else{
			res.send("添加成功")

		}
	})
})
app.get("/getdata",function(req,res){
	var type=req.query;
	console.log(type)
	db.find("shopcar",{},function(err,data){
		if (err) {
			res.send("添加失败")
		}else{
			res.send(data)
		}
	})
})



app.listen(8080,function(){
	console.log("服务开启成功")
})