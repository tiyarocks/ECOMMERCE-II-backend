// import mongoose
const express=require("express")
const app=express()

const cors=require("cors")
const expressValidator=require("express-validator")
const morgan=require("morgan")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")

const mongoose = require('mongoose')

// load env variables
const dotenv = require('dotenv')
dotenv.config()

const authRoutes=require("./routes/auth")
const userRoutes=require("./routes/user")
const categoryRoutes=require("./routes/category")
const productRoutes=require("./routes/product")
const braintreeRoutes =require("./routes/braintree")
const orderRoutes =require("./routes/order")


//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});


//middlewares
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())
//routes middleware

app.use("/api",authRoutes)
app.use("/api",userRoutes)


app.use("/api",categoryRoutes)
app.use("/api",productRoutes)

app.use("/api",braintreeRoutes)
app.use("/api",orderRoutes)



const port=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})