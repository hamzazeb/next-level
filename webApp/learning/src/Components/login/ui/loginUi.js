import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../assets/login.css'
import GridSystem from './gridsSystem';


const LoginUi=()=>{
    return(
        <Fragment>
           <div class="login-page">
                <div class="form">
                   <div className='row'>
                       <div className='col-sm-12 col-lg-12 col-md-12'>
                            <form class="login-form">
                                <input type="text" placeholder="username"/>
                                <input type="password" placeholder="password"/>
                                <button>login</button>
                                <p class="message"><Link to="/recover/password">Forget password?</Link></p>
                                <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
                            </form>
                       </div>
                   </div>
                </div>
                </div>
        </Fragment>
    )
}

export default LoginUi