import React,{useState,useEffect} from 'react'


const Radiobox=({prices,handleFilters})=>{
const[value,setValue]= useState(0);

const handleChange=(e)=>{
handleFilters(e.target.value)
setValue(e.target.value)
}

return prices.map((p,i)=>(
    <div  key={i}>
        <input type="radio" className="form-check-input" value={`${p._id}`}  name={p} onChange={handleChange}/>
   <label className="form-check-label" > {p.name}</label>
    </div>
     
   ))
}

export default Radiobox;