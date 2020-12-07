import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from "./user/Signup"
import Signin from "./user/Signin"
import Home from "./core/Home"
import PrivateRoute from "./auth/PrivateRoute"
import AdminRoute from './auth/AdminRoute'
import Dashboard from "./user/UserDashboard"
import AdminDashboard from "./user/AdminDashboard"
import AddCategory from "./admin/AddCategory"
import AddProduct from "./admin/AddProduct"
import Shop from "./core/Shop"
import Product from "./core/Product"
import Cart from "./core/Cart"
import Orders from "./admin/Order"
import Profile from "./user/Profile"
import ManageProducts from "./admin/ManageProducts"
import UpdateProduct from "./admin/UpdateProduct"

const Routes =()=>{
    return (
        
            <Router>
              
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route eact path="/signup" component={Signup}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/cart" component={Cart}/>
                    <AdminRoute path="/create/product" exact component={AddProduct} />
                <Route path="/product/:productId" exact component={Product} />
                    <PrivateRoute exact path="/user/dashboard" component={Dashboard}/>
                    <PrivateRoute exact path="/profile/:userId" component={Profile}/>
                    <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
                    <AdminRoute exact path="/category/create" component={AddCategory}/>
                    <AdminRoute exact path="/admin/orders" component={Orders}/>
                    <AdminRoute exact path="/admin/products" component={ManageProducts}/>
                    <AdminRoute exact path="/admin/product/update/:productId" component={UpdateProduct}/>
                </Switch>
            </Router>
       
    )
}

export default Routes;