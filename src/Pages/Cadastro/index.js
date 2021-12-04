import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../../Components/Button";
import Input from "../../Components/Input";

import Title from "../../Components/Title";
import { AuthenticateContext } from "../../Context/AuthenticateContext";

import { validateName, validateEmail, validatePassword } from "../../assets/js/Validations";
import { Modal, ModalContainer, Wrap } from "./styles";

export default function Cadastro() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);
    const formRef = useRef();

    const { SignOut } = useContext(AuthenticateContext);

    useEffect(() => {
        formRef.current.classList.add("active");
    }, []);

    async function handleClick() {
        const rows = await SignOut({name, email, password});
    }

    return (
        <>
            <ModalContainer ref={formRef} style={{ marginTop: "100px" }}>
                <Modal>
                    <Title>Bem Vindo</Title>
                    <span>Acesse seus melhores animes guardados em nuvem!</span>
                    <Wrap>
                        <label htmlFor="name">Name</label>
                        <Input id="name" type="text" onChange={(e) => setName(e.target.value)}/>
                    </Wrap>
                    <Wrap>
                        <label htmlFor="email">Email</label>
                        <Input id="email" type="text" onChange={(e) => setEmail(e.target.value)}/>
                    </Wrap>
                    <Wrap>
                        <label htmlFor="password">Senha</label>
                        <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </Wrap>
                    <Button onClick={handleClick}>Acessar</Button>
                    <span style={{ marginTop: "12px" }}>
                        Já possui conta ? <Link to="/login">Acessar Agora</Link>{" "}
                    </span>
                </Modal>
            </ModalContainer>
        </>
    );
}
