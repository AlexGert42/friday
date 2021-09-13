import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Login } from './login/Login';
import { Profile } from './profile/Profile';
import {NotFound} from "./notFound/NotFound";
import { Test } from './test/Test';



const main = {
    boxShadow: '0px 0px 3px 0px rgba(34, 60, 80, 0.2)',
    margin: '90px 0 25px 0',
    padding: '30px',
    minHeight: 'calc(100vh - 265px)'
}


export const Content: React.FC = () => {

    return (
        <main style={main}>
            <Switch>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/test'} component={Test}/>
                <Route component={NotFound}/>
            </Switch>
        </main>

    )
}