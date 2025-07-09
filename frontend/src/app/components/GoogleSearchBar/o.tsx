import React, { useEffect, useState } from 'react'

const o = () => {
    const [result, setResult] = useState([]);
    const [cache,setCache]=useState({})
    const [Input, serInput] = useState("");
    const [showResult, setShowResult] = useState(false)

    const fetchApiData = async (query: string) => {
        if(cache[query]){
            console.log(query);
            setResult(cache[query])
            return
        }
        const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
        const data = await response.json();
        if (data?.recipes) {
            setResult(data.recipes)
            setCache((prev)=>({...prev,[query]:data.recipes}))
        }
    }

    useEffect(()=>{
        const trimmedInput=input.trim();
        if(trimmedInput===""){
            setResult([]);
            reutn 
        }
        const timer=setTimeout(()=>{
            fetchApiData(trimmedInput);
        },300)
    },[])
    return (
        <div>

        </div>
    )
}

export default o
