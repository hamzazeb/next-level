import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
const RegisterUi=()=>{
    return(
        <Fragment>
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                    <input type="text" placeholder="first name"/>
                    <input type="text" placeholder="last name"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="confirm password"/>
                    <input type="text" placeholder="email address"/>
                    <input type="text" placeholder="phone number"/>
                    <button>sign up</button>
                    <p class="message">Already registered? <Link to="/">Sign In</Link></p>
                    </form>
                </div>
                </div>
        </Fragment>
    )
}

export default RegisterUi