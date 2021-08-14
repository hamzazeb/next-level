import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../assets/login.css'

const LoginUi=()=>{
    return(
        <Fragment>
           <div class="login-page">
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                        <p class="message"><Link to="/recover/password">Forget password?</Link></p>
                        <p class="message">Not registered? <Link to="/register">Create an account</Link></p>
                    </form>
                </div>
                </div>
        </Fragment>
    )
}

export default LoginUi