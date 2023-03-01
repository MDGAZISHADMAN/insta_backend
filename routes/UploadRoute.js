const { Router } = require("express");
const uploadMiddleware = require("../middlewares/MulterMiddleware");
const Upload = require("../models/UploadModel");

const router = Router();
router.get("/api/get",async(req,res)=>{
  const data = await Upload.find().sort({
      createdAt:"descending"
  })//?
  res.send(data)

})

router.post("/api/save",uploadMiddleware.single("photo"),async(req,res)=>{ // use to select single photo
  const photo = req.file.filename
  const {name,description,city} = req.body
  const data = await Upload.create({
      photo,
  //     name,
  //     description,
  //     city
     })
  res.send(data)
  // data.save()
  console.log(req)

    // .then((data) => {
    //   console.log("Uploaded Successfully...");
    //   console.log(data);
    //   res.send(data);
    // })
    // .catch((err) => console.log(err));
});

module.exports = router;
