const path=require('path')

const getProducts=(req,res)=>{
    res.send("Fetching all details")
}
const getProductForm=(req,res)=>{
    res.sendFile(path.join(__dirname,"..","VIEW","product.html"))
}
const getProductById=(req,res)=>{
    const id=req.params.id
    res.send(`Fetching product with ID: ${id}`)
};
const postproducts=(req,res)=>{
     const data=req.body
    // 
    res.json({value:data.productName})
   
    console.log(data)
}
const putproducts=(req,res)=>{
    res.send("putting the new product")
}
const deleteproducts=(req,res)=>{
    res.send("deleting the product")
}
module.exports={
    getProducts,
    getProductById,
    postproducts,
    putproducts,
    deleteproducts,
    getProductForm
   
}