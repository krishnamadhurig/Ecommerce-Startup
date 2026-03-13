const express=require('express')
const app=express()
app.use(express.static('public'))
app.use(express.json())
const userRouter=require('./routes/users')
const productRouter=require('./routes/products')
const cartRouter=require('./routes/cartRoutes')
app.use("/api/users", userRouter)
app.use("/api/products",productRouter)
app.use("/api/cart", cartRouter)

app.listen(5000, ()=>{
    console.log("server is running on http://localhost:5000")
})