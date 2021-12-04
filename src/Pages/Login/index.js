import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Title from "../../Components/Title";
import { AuthenticateContext } from "../../Context/AuthenticateContext";
import { Modal, ModalContainer, Wrap } from "./styles";

export default function Login() {
    const { SignIn } = useContext(AuthenticateContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const form = useRef();

    useEffect(() => {
        form.current.classList.add("active");
    }, []);

    async function handleClick() {
        if(email.trim().length <= 1){
            alert("Digite um email!")
        }else if(password.trim().length <= 1){
            alert("Digite sua senha")
        }else{
            const rows = await SignIn({email, password});
        }
    }

    return (
        <>
            <ModalContainer ref={form}>
                <Modal>
                    <Title>Bem Vindo</Title>
                    <span>Acesse seus melhores animes guardados em nuvem!</span>
                    <Wrap>
                        <label htmlFor="email">Email</label>
                        <Input
                            id="email"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Wrap>
                    <Wrap>
                        <label htmlFor="password">Senha</label>
                        <Input
                            id="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Wrap>
                    <Button onClick={handleClick}>Acessar</Button>
                    <span style={{ marginTop: "12px" }}>
                        Não possui conta ?{" "}
                        <Link to="/cadastro">Registre-se Agora</Link>{" "}
                    </span>
                </Modal>
            </ModalContainer>
        </>
    );
}
