const express=require('express')
const app=express()
app.use(express.json())
const userRouter=require('./routes/users')
const productRouter=require('./routes/products')
const cartRouter=require('./routes/cartRoutes')
app.use("/users", userRouter)
app.use("/products",productRouter)
app.use("/cart", cartRouter)

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})