const express=require("express")
const router= express.Router()  //invoke

const {create,categoryById,read,update,remove,list}= require("../controllers/category")
const {UserById}= require("../controllers/user")
const {requireSignIn,isAuth,isAdmin}=require("../controllers/auth")

router.get("/category/:categoryId",read)
router.post("/category/create/:userId",requireSignIn,isAuth,isAdmin,create)
router.put("/category/:categoryId/:userId",requireSignIn,isAuth,isAdmin,update)
router.delete("/category/:categoryId/:userId",requireSignIn,isAuth,isAdmin,remove)
router.get("/categories",list)

router.param('userId',UserById)
router.param("categoryId",categoryById)
module.exports=router