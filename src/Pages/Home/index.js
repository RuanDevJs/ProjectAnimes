import React, { useCallback, useEffect, useState } from "react";
import { Container, Wrap } from "./styles";

import media from "../../assets/img/home/Ace.jpg";
import usePosts from "../../hooks/usePosts";

import {LazyLoadImage} from "react-lazy-load-image-component";
import Modal from "../../Components/Modal";

export default function Home() {
    const [active, setActive] = useState(false);
    const { dataPosts: data, loading } = usePosts();
    const [modalData, setModalData] = useState(null);

    const handleClick = useCallback((data) => {
        setModalData(data);
        setActive(true);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            {data.map((el, index) => {
                return (
                    <Wrap key={index}>
                        <LazyLoadImage
                            src={el.media_path}
                            alt={el.title}
                            draggable={false}
                            style={{ cursor: "pointer"}}
                            onClick={() => handleClick(el)}
                        />
                    </Wrap>
                );
            })}
            {active ? <Modal data={modalData} active={active} setActive={setActive}/> : null}
        </Container>
    );
}
