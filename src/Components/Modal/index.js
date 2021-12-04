import React, { useCallback } from 'react'
import { Author, Container, Header, Image, Left, Right, Subtitle, Title, Wrap } from './style';

import {LazyLoadImage} from "react-lazy-load-image-component";

export default function Modal({data, setModalData, active, setActive}) {

    const handleClick = useCallback((e) => {
        const wrap = document.querySelector(".wrap");
        if(e.currentTarget !== e.target){
            return null
        }else{
            setActive(!active)
        }
    }, []);

    return (
        <Container onClick={handleClick}>
            <Wrap className="wrap">
                <Left>
                    <LazyLoadImage src={data.media_path} />
                </Left>
                <Right>
                    <Header>
                        <LazyLoadImage src={data.image_path ? data.image_path : data.assignedTo.image_path} alt="Autor" />
                        <Author>{data.assignedTo.name}</Author>
                    </Header>
                    <Title>{data.title}</Title>
                    <Subtitle>{data.subtitle}</Subtitle>
                </Right>
            </Wrap>
        </Container>
    )
}
