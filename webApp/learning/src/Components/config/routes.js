import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Login from '../login/container/login';
import Register from '../register/container/register';
import Passwords from '../passwords/container/password';
import ProfileUi from '../Profile/UI/Profile';
import EditProfile from '../Profile/UI/EditProfile';

const Routes=()=>{
    return(
        <Fragment>
            <BrowserRouter>

                <Switch>
                    <Container> 
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/recover/password" component={Passwords}/>
                        <Route exact path='/profile' component={ProfileUi}/>
                        <Route exact path='/edit/profile' component={EditProfile}/>
                    </Container>
                </Switch>
                
            </BrowserRouter>
        </Fragment>
    )
}
export default Routes