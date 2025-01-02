const DeveloperModel = require('../models/developersModel');


//Create a new Developer
exports.InsertDeveloper = async (req, res) => {
  const reqBody = req.body;

 try{
    const data = await DeveloperModel.create(reqBody);
    res.status(201).json({
        status: "Success",
        data: data, 
    })
 }
   catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Developer.",
    });
  }
};


//Read all Developers
exports.GetAllDevelopers = async (req, res) => {
  try {
    const data = await DeveloperModel.find();
    res.status(200).json({
      status: "Success",
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving developers.",
    });
  }
}   

//Update a Developer
exports.UpdateDeveloper = async (req, res) => {
  const id = req.params.id;
  const reqBody = req.body;

  try {
    const data = await DeveloperModel.findByIdAndUpdate(id, reqBody,(err,data)=>{
      if(err){
        res.status(404).send({
          message: `Cannot update Developer with id=${id}. Maybe Developer was not found!`,
        });
      }else{
        res.status(200).json({
          status: "Success",
          data: data,
        });
      }   
    })
  }
catch (err) {
    res.status(500).send({
      message: err.message || "Error updating Developer with id=" + id,
    });
  }

}


//Delete a Developer
exports.DeleteDeveloper = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await DeveloperModel.findByIdAndDelete(id,(err,data)=>{
      if(err){
        res.status(404).send({
          message: `Cannot delete Developer with id=${id}. Maybe Developer was not found!`,
        });
      }else{
        res.status(200).json({
          status: "Success",
          data: data,
        });
      }   
    })
  }
catch (err) {
    res.status(500).send({
      message: err.message || "Could not delete Developer with id=" + id,
    });
  }

}