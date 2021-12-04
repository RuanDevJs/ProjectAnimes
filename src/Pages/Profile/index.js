import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import axios from "../../services/axios";

import { AuthenticateContext } from "../../Context/AuthenticateContext";
import {
    Container,
    Left,
    ProfilePhoto,
    Right,
    Subtitle,
    Title,
    Wrap,
} from "./styles";

import firebase from "../../services/firebase";
import { AddBox, AddAPhoto } from "@material-ui/icons";

import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";

import Modal from "../../Components/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Profile() {
    const [active, setActive] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const refContainer = useRef();

    const [modalData, setModalData] = useState(null);

    const { id } = useContext(AuthenticateContext);
    const {
        dataUser: data,
        setDataUser,
        loading,
        response,
        setLoading,
        posts,
    } = useUser(id);

    useEffect(() => {
        if (!loading) {
            refContainer.current.classList.add("active");
        }
    }, [loading]);

    useEffect(() => {
        if(data){
            setLoading(true);
            (async() => {
                const getPosts = await axios.get(`/posts/user/${data._id}`);
                setAllPosts(getPosts.data);
                setLoading(false);
            })();
        }
    }, [data, setLoading])

    useEffect(() => {
        if(allPosts){
            const image = document.querySelectorAll('.posts-img');
            image.forEach((el, index) => {
                el.classList.add("active");
            })
        }
    }, [allPosts])

    const handleClick = useCallback((data) => {
        setModalData(data);
        setActive(true);
    }, []);

    async function handleChange(e) {
        (async () => {
            setLoading(true);
            const image_data = e.target.files[0];
            const path = await (
                await firebase
                    .storage()
                    .ref(`/user/${data._id}`)
                    .put(image_data)
            ).ref.getDownloadURL();
            if (path) {
                try {
                    const rows = await (
                        await axios.put(`/user/${data._id}/updatephoto`, {
                            url: path,
                        })
                    ).data;
                    setDataUser(rows);
                    setLoading(false);
                } catch (e) {
                    return e;
                }
            }
        })();
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Container ref={refContainer}>
                <Left>
                    {data.image_path ? (
                        <>
                            <label htmlFor="file">
                                <LazyLoadImage
                                    src={data.image_path}
                                    draggable={false}
                                    width={160}
                                    height={160}
                                    style={{borderRadius: "50%"}}
                                />
                            </label>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={handleChange}
                            />
                        </>
                    ) : (
                        <>
                            <label htmlFor="file">
                                Adicionar foto <AddAPhoto htmlColor="#D95829" />
                            </label>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={handleChange}
                            />
                        </>
                    )}
                </Left>
                <Right>
                    <Wrap>
                        <Title>{data.name} </Title>
                        <Link to={`/user/${data.name}/post`}>
                            <AddBox
                                htmlColor="#D95829"
                                style={{ width: "35px", height: "35px" }}
                            />
                        </Link>
                    </Wrap>
                    <Wrap>
                        <Subtitle>
                            {allPosts
                            ? <> {allPosts.length} <span style={{fontWeight: "400"}}>Publicações</span> </>
                            : null}
                        </Subtitle>
                        <div style={{ marginLeft: "33px" }}>
                            <Subtitle>
                                {data.tags.length ? (
                                    data.tags.map((el) => ` ${el} `)
                                ) : (
                                    <Link to={`/user/account/${data.name}`}>
                                        Adicionar tags
                                    </Link>
                                )}
                            </Subtitle>
                        </div>
                    </Wrap>
                    <Wrap>
                        <Subtitle>"Libertários não morrem!"</Subtitle>
                    </Wrap>
                </Right>
            </Container>
            <Container
                style={{
                    display: "flex",
                    marginTop: "90px",
                    gap: "20px",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                }}
                onClick={() => setActive(!active)}
                className="responsive-container"
            >
                {allPosts ? allPosts.map((el, index) => {
                    return (
                        <LazyLoadImage
                            key={index}
                            alt={el.title}
                            height={300}
                            src={el.media_path}
                            width={300}
                            style={{borderRadius: "12px"}}
                            onClick={() => handleClick(el)}
                        />
                    );
                }) : null}
                {active ? <Modal data={modalData} /> : null}
            </Container>
        </>
    );
}

