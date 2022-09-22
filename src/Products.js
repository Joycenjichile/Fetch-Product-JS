import React ,{useEffect,useState} from "react";
const Products =()=>{
    const[products,setProducts] = useState();
    const[loading,setLoading] = useState(false);
    useEffect(()=>{
        fetchProducts()
    },[]);
    const fetchProducts = ()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then((data)=>{
            setProducts(data);
            setLoading(true);})
        .catch(e=> {
          throw new Error(e.message)});
    };
    if(!loading){
        console.log("loading",loading)
        return <div>Loading...</div>
    }
    return (
        <div className="products">
        <h2>All Products</h2>
            {products.map(item=>(
                <div>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
        );
        };
export default Products;