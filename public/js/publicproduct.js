const onSubmitHandler=(e)=>{
    e.preventDefault()
    console.log("Submit function called")
    const product=e.target.productName.value
    const obj={
        "productName":product
    }
    axios.post("http://localhost:5000"+"/api/products",obj).then((result)=>{
        console.log("result from post data",result.data)
    })

}