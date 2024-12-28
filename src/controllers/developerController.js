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
