const express=require("express")
const router= express.Router()  //invoke
const {requireSignIn,isAuth}=require("../controllers/auth")
const {UserById}= require("../controllers/user")
const {create}=require("../controllers/order")

router.post("/order/create/:userId",requireSignIn,isAuth,create)
router.param("userId",UserById)
module.exports=router  