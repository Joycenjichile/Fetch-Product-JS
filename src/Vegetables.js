import React ,{useEffect,useState} from "react";
const vegetables =()=>{
    const[vegetables,setVegetables] = useState();
    const[loading,setLoading] = useState(false);
    useEffect(()=>{
        fetchVegetables()
    },[]);
    const fetchVegetables= ()=>{
        fetch('http://localhost:5000/products/vegetables')
        .then(res=>res.json())
        .then((data)=>{
            setVegetables(data);
            setLoading(true);})
        .catch(e=> {
          throw new Error(e.message)});
    };
    if(!loading){
        console.log("loading",loading)
        return <div>Loading...</div>
    }
    return (
        <div className="vegetables">
        <h2>All vegetables</h2>
            {vegetables.map(item=>(
                <div>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
        );
        };
export default vegetables;