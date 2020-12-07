import React,{useState} from 'react'
import Layout from "../core/Layout"
import{ Redirect} from 'react-router-dom'
import {signin, authenticate, isAuthenticated} from "../auth"


const Signin= () => {
    const[values, setValues]=useState({
        
        email:'pratapadhikari37@gmail.com',
        password:'darwin123',
        error:'',
       loading:false,
       redirectToReferrer:false,
    })

    const { email, password, loading, error, redirectToReferrer} = values;
    const{user}=isAuthenticated();

const handleChange = name => (e)=>{
setValues({...values, error:false, [name]:e.target.value})
}




const handleSubmit=(e)=>{
    e.preventDefault();
    setValues({...values, error: false, loading: true})
signin({email, password})
.then(data=>{
   
    if(data.error){
        setValues({...values, error:data.error, loading:false})
    } else{
        authenticate(data, ()=>{
            setValues({...values, redirectToReferrer:true})
        })
      
    }
})
}

const showError=()=>( 
     <div className="alert alert-danger" style={{display:error ? ' ': 'none'}}>
{error}
</div>)
   

const showLoading=()=>(
    loading &&(
        <div className="alert alert-info">
            <h2>...Loading</h2>
        </div>
    )
)
   
const redirectUser=()=>{
    if(redirectToReferrer){
        if(user && user.role===1){
            return <Redirect to="/admin/dashboard"/>
        }
        else {
            return <Redirect to="/user/dashboard"/>
        }
       
    }

    if(isAuthenticated()){
       return <Redirect to="/"/>
    }
}


   
    return (
        <Layout title="Signin" description="Signin to Node React E-commerce App" className="container col-md-8 offset-md-2">
            {showLoading()}
            {showError()}
  <form>
                   
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
                {redirectUser()}
        </Layout>
    )
}

export default Signin
