const express=require("express")
const {listSearch}=require("../controllers/product")
const router= express.Router()  //invoke

const {create,ProductById,read,remove,update,list,listRelated,listCategories,listBySearch,photo}= require("../controllers/product")
const {UserById}= require("../controllers/user")
const {requireSignIn,isAuth,isAdmin}=require("../controllers/auth")

router.get("/products",list)
router.get("/products/related/:productId",listRelated)

router.get("/product/:productId",read)
router.post("/product/create/:userId",requireSignIn,isAuth,isAdmin,create)

router.get("/products/search",listSearch)
router.delete("/product/:productId/:userId",requireSignIn,isAuth,isAdmin,remove)
router.put("/product/:productId/:userId",requireSignIn,isAuth,isAdmin,update)

router.param('userId',UserById)
router.param("productId",ProductById)

router.get("/products/categories",listCategories)
router.post("/products/by/search", listBySearch)
router.get("/product/photo/:productId",photo)
module.exports=router