import React ,{useEffect,useState} from "react";
const Fruits =()=>{
    const[fruits,setFruits] = useState();
    const[loading,setLoading] = useState(false);
    useEffect(()=>{
        fetchFruits()
    },[]);
    const fetchFruits = ()=>{
        fetch('http://localhost:5000/products/fruits')
        .then(res=>res.json())
        .then((data)=>{
            setFruits(data);
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
        <h2>All Fruits</h2>
            {fruits.map(item=>(
                <div>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
        );
        };
export default Fruits;