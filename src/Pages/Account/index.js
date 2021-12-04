import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import axios from "../../services/axios";

import { AuthenticateContext } from "../../Context/AuthenticateContext";
import { Container, Label, Table, Title, Wrap } from "./style";

import useUser from "../../hooks/useUser";
import Input from "../../Components/Input";

export default function Account() {
    const refContainer = useRef();
    const { id } = useContext(AuthenticateContext);

    const { dataUser: data, setDataUser, loading, setLoading } = useUser(id);

    const [tags, setTags] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (!loading) {
            refContainer.current.classList.add("active");
        }
    }, [loading]);

    async function handleClick() {
        const rows = await (
            await axios.put(`/user/${data._id}`, {
                name: name.length ? name : data.name,
                email: email.length ? email : data.email,
                url: data.image_path,
                tags: tags.length ? tags.split(",") : data.tags,
                passowrd: data.passowrd,
            })
        ).data;

        if (rows) {
            setDataUser(rows);
            window.location.reload();
        } else {
            alert("Não foi possível alterar!");
        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Title>Minha Conta</Title>
            <Container ref={refContainer}>
                <Wrap>
                    <Label
                        style={{
                            textAlign: "center",
                            display: "block",
                            fontSize: "20px",
                        }}
                    >
                        Detalhes da Conta
                    </Label>
                    <Table>
                        <Input
                            type="text"
                            placeholder={data.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Label
                            style={{
                                color: "#D95829",
                                fontSize: "12px",
                                fontWeight: "400",
                                cursor: "pointer",
                            }}
                            onClick={handleClick}
                        >
                            Editar
                        </Label>
                    </Table>
                    <Table>
                        <Input
                            type="text"
                            placeholder={data.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Label
                            style={{
                                color: "#D95829",
                                fontSize: "12px",
                                fontWeight: "400",
                                cursor: "pointer",
                            }}
                            onClick={handleClick}
                        >
                            Editar
                        </Label>
                    </Table>
                    <Table>
                        <Input
                            type="text"
                            placeholder={
                                data.tags.length
                                    ? data.tags.map((el) => `${el} `)
                                    : "Adicionar tags"
                            }
                            onChange={(e) => setTags(e.target.value)}
                        />
                        <Label
                            style={{
                                color: "#D95829",
                                fontSize: "12px",
                                fontWeight: "400",
                                cursor: "pointer",
                            }}
                            onClick={handleClick}
                        >
                            Editar
                        </Label>
                    </Table>
                    <Table>
                        <Input type="password" placeholder={"Sua senha"} />
                        <Label
                            style={{
                                color: "#D95829",
                                fontSize: "12px",
                                fontWeight: "400",
                                cursor: "pointer",
                            }}
                        >
                            Editar
                        </Label>
                    </Table>
                </Wrap>
            </Container>
        </>
    );
}
