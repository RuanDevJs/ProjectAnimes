import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import axios from "../../services/axios";
import firebase from "../../services/firebase";

import { AuthenticateContext } from "../../Context/AuthenticateContext";
import { Container, Label, Table, Title, Wrap } from "./style";

import useUser from "../../hooks/useUser";
import Input from "../../Components/Input";
import { useHistory } from "react-router";
import Button from "../../Components/Button";

export default function FormPost() {
    const refContainer = useRef();
    const { id } = useContext(AuthenticateContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [e, setE] = useState(null);

    const { dataUser: data, setDataUser, loading, setLoading } = useUser(id);
    const history = useHistory();

    useEffect(() => {
        if (!loading) {
            refContainer.current.classList.add("active");
        }
    }, [loading]);

    async function handleClick() {
        setLoading(true)
        const image = e.target.files[0];
        const getUrlFromImage = await (
            await firebase
                .storage()
                .ref(`/user/${data._id}`)
                .child(image.name)
                .put(image)
        ).ref.getDownloadURL();

        if (getUrlFromImage) {
            try {
                const rows = await (
                    await axios.post(`/posts`, {
                        title: title,
                        subtitle: description,
                        assignedTo: data._id,
                        media_path: getUrlFromImage,
                    })
                ).data;
                history.push("/");
            } catch (error) {
                setLoading(false);
                return error;
            }
        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Title>Poste sua foto</Title>
            <Container ref={refContainer}>
                <Wrap>
                    <Label htmlFor="title">Título</Label>
                    <input
                        type="text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Wrap>
                <Wrap>
                    <Label htmlFor="description">Descrição</Label>
                    <textarea
                        id="description"
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Wrap>
                <Wrap>
                    <Label htmlFor="file">Título</Label>
                    <input type="file" id="file" onChange={(e) => setE(e)} />
                </Wrap>
                <Button onClick={handleClick}>Enviar</Button>
            </Container>
        </>
    );
}
