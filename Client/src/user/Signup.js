import React,{useState} from 'react'
import Layout from "../core/Layout"
import{Link} from 'react-router-dom'
import {signup} from "../auth"


const Signup = () => {
    const[values, setValues]=useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    })

const handleChange = name => (e)=>{
setValues({...values, error:false, [name]:e.target.value})
}

const {name, email, password, success, error} = values;



const handleSubmit=(e)=>{
    e.preventDefault();
    setValues({...values, error: false})
signup({name, email, password})
.then(data=>{
   
    if(data.error){
        setValues({...values, error:data.error, success:false})
    } else{
        setValues({...values, success:true, error:'', name:'', email:'', password:'' })
    }
})
}

const showError=()=>( 
     <div className="alert alert-danger" style={{display:error ? ' ': 'none'}}>
{error}
</div>)
   

const showSuccess=()=>(
    <div className="alert alert-info" style={{display:success? ' ': 'none'}}>
    New account is created. Please <Link to="/signin">Signin</Link>
</div>
)
   


   
    return (
        <Layout title="Signup" description="Signup to Node React E-commerce App" className="container col-md-8 offset-md-2">
            {showSuccess()}
            {showError()}
  <form>
                    <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input type="text" className="form-control" value={name} onChange={handleChange('name')}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input type="email" className="form-control" value={email} onChange={handleChange('email')}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input type="password" className="form-control" value={password} onChange={handleChange('password')}/>
                    </div>
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
                
        </Layout>
    )
}

export default Signup
