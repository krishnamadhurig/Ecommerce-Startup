const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const userRouter=require('./routes/users')
const productRouter=require('./routes/products')
const cartRouter=require('./routes/cartRoutes')
app.use("/api/users", userRouter)
app.use("/api/products",productRouter)
app.use("/api/cart", cartRouter)

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})