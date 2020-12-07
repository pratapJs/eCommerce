import React,{useState,useEffect} from 'react'

const Checkbox = ({categories, handleFilters}) => {
    const[checked,setChecked]=useState([])

const handleToggle=c=>()=>{
const currentCategoryId= checked.indexOf(c) //return the first index if found or -1 if not found
const newCheckedCategoryId=[...checked];
//if currently checked was not already in checked state >push
//else pull/take off
if(currentCategoryId===-1){
    newCheckedCategoryId.push(c)
} else {
    newCheckedCategoryId.splice(currentCategoryId,1)
    
}
//console.log(newCheckedCategoryId)
setChecked(newCheckedCategoryId)
handleFilters(newCheckedCategoryId)
}

    return categories.map((c,i)=>(
     <li className="list-unstyled" key={i}>
         <input type="checkbox" className="form-check-input" value={checked.indexOf(c._id===-1)} onChange={handleToggle(c._id)}/>
    <label className="form-check-label" > {c.name}</label>
     </li>
      
    ))
}

export default Checkbox
