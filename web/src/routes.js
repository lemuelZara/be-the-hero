import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Logon } from './pages/Logon/index'
import { Register } from './pages/Register/index'
import { Profile } from './pages/Profile/index'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Logon} exact />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}