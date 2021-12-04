import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../Components/Header";
import { AuthenticateContext } from "../Context/AuthenticateContext";

import Account from "../Pages/Account";

import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";

import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";

import Profile from "../Pages/Profile";
import FormPost from "../Pages/FormPost";

function CustomRoute({ isPrivate, ...props }) {
    const {authenticated, loading} = useContext(AuthenticateContext);

    if(loading){
        return <p>Loading...</p>
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/" />;
    }

    return <Route {...props} />;
}

export default function Routes() {
    return (
        <>
            <Switch>
                <CustomRoute exact path="/login" component={Login} />
                <CustomRoute exact path="/cadastro" component={Cadastro} />
                <CustomRoute exact path="/" component={Home} />
                <CustomRoute exact isPrivate path="/user/:name" component={Profile} />
                <CustomRoute exact isPrivate path="/user/account/:name" component={Account} />
                <CustomRoute exact isPrivate path="/user/:name/post" component={FormPost} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
}
