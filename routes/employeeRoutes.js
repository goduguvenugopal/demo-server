const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const multer = require("multer")
// image multer code 

const upload = multer({
    limits: {
      fileSize: 5 * 1024 * 1024, // 5 MB file size limit
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Please upload only images'));
      }
    },
  });



// POST , GET , PUT , DELETE route for employeeS
router.post("/add-emp", employeeController.createEmployee);
router.get("/get-emp", employeeController.getEmployees);
router.delete("/delbyidemp/:id", employeeController.delByIdEmp);
router.post("/add-user", employeeController.createUser);
router.get("/get-user", employeeController.getUser);
router.delete("/delete-user", employeeController.deleteUsers);
router.delete("/deluserbyid/:id", employeeController.delUserById);
router.get("/getuserbyid/:id", employeeController.getUserById);
router.put("/updateuserbyid/:id", employeeController.updateUserById);
router.post("/getempbyphone", employeeController.findByOneEmp);
router.put("/updatebyidemp/:id", employeeController.updateByIdEmp);
router.post("/imgPost", upload.single('image'),employeeController.uploadImage)



module.exports = router;
