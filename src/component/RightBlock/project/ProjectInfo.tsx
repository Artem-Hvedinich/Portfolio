import React from 'react';
import styled from "styled-components";

const InfoWrapper = styled.div<{ active: boolean }>`
  width: ${props => props.active ? 0 : 0};
  transition: width 5s;
`
const ImageInfo = styled.div<{ bgImg: string }>`
  background-size: cover;
  position: absolute;
  background-position: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-color: black;
  background-image: url("${props => props.bgImg}");`

type PropsType = {
    title: string
    text: string
    img: string
    href: string
    activeProject: boolean
}
export const ProjectInfo = (props: PropsType) => {

    return (
        <InfoWrapper active={props.activeProject}>
            <ImageInfo bgImg={props.img}/>
        </InfoWrapper>
    );
};

