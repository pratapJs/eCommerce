import React,{useState} from 'react'
import Layout from "../core/Layout"
import {isAuthenticated} from "../auth"
import {Link} from "react-router-dom"
import {createCategory} from "./apiAdmin"

const AddCategory = () => {
    const [name, setName] =useState('')
    const[error, setError]=useState(false)
    const[success,setSuccess]=useState(false)

//destructure user and token from localstorage
const {user, token}=isAuthenticated();

const handleSubmit=(e)=>{
e.preventDefault();
setError('')
setSuccess(false)
//make request to api to create category
createCategory(user._id, token, {name})
.then(data=>{
    if(data.error){
        setError(data.error)
    } else {
        setError('')
        setSuccess(true)
    }
})

}

const handleChange=(e)=>{
    setError('')
setName(e.target.value)

}

const showSuccess=()=>{
    if(success){
    return <h3 className="text-success">{name} category is created</h3>
    }
}
const showError=()=>{
    if(error){
    return <h3 className="text-danger">{name} category already exists. Category should be unique</h3>
    }
}


    return (
        <Layout title="Add a new category" description={`${user.name}, Please add a new category.`}>
            <div className="row">
    <div className="col-md-8 offset-md-2">
        {showSuccess()}
        {showError()}
         <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="text-muted">Name</label>
            <input type="text" className="form-control" value={name} autoFocus onChange={handleChange}/>
        </div>
        <button className="btn btn-outline-primary">Create Category</button>
        <div className="mt-5">
        <Link to="/admin/dashboard" className="text-warning">
            Back to Dashboard
        </Link>
    </div>  
    </form>
 
    </div>
   
    </div>
           
        </Layout>
    )
}

export default AddCategory
