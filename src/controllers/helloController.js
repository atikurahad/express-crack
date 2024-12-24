exports.Hello = (req, res)=> {
    res.status(200).json({ status:"Success",data:"I am calling form controller inside of hello controller" });

}


exports.User =(req,res)=>{
res.status(200).json({status:"Success",data:"I am calling form User"});
}