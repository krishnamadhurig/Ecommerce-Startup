const getProducts=(req,res)=>{
    res.send("Fetching all products")
}
const getProductById=(req,res)=>{
    const id=req.params.id
    res.send(`Fetching product with ID: ${id}`)
};
const postproducts=(req,res)=>{
    res.send("Adding a new product")
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
    deleteproducts
}