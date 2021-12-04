import React, { useContext, useEffect, useState } from "react";
import { Container, Header } from "./styles";

import logo from "../../assets/img/logo/Anime's.svg";
import { Link } from "react-router-dom";

import { AuthenticateContext } from "../../Context/AuthenticateContext";
import axios from "../../services/axios";

import useUser from "../../hooks/useUser";

export default function Headers() {
    const {authenticated} = useContext(AuthenticateContext);

    return (
        <>
            {authenticated
            ? <AuhtenticatedHeader />
            : <NotAuthenticatedHeader /> }
        </>
    );
}

function AuhtenticatedHeader(){
    const [active, setActive] = useState(false);
    const {id, LogOut} = useContext(AuthenticateContext);

    const {loading, dataUser: data} = useUser(id);

    function handleClick() {
        setActive(!active);
    }

    if(loading){
        return null;
    }

    return(
        <Header>
            <Container>
                <Link to="/" style={{ cursor: "pointer" }}>
                    <img src={logo} alt="logo" />
                </Link>
                    <span className="button_header_exit" onClick={handleClick}>
                        {data.name}
                        <ul style={{ display: active ? "block" : "none" }}>
                            <li>
                                <Link to={`/user/account/${data.name}`}>
                                    Minha Conta
                                </Link>
                            </li>
                            <li>
                                <Link to={`/user/${data.name}`}>
                                    Meu Perfil
                                </Link>
                            </li>
                            <li onClick={LogOut}>Sair da Conta</li>
                        </ul>
                    </span>
            </Container>
        </Header>
    )
}

function NotAuthenticatedHeader(){
    return(
        <Header>
            <Container>
                <Link to="/" style={{ cursor: "pointer" }}>
                    <img src={logo} alt="logo" />
                </Link>
                <Link to="/login" className="button_header">
                        Login/Cadastro
                    </Link>
            </Container>
        </Header>

    )
}
