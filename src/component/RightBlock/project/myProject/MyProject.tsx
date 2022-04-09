import React from "react";
import {store} from "../../../../store/store";
import styled from "styled-components";
import {RightBlockTitle} from "../../../common/RightBlockTitle";
import {LineSeparator, Text} from "../../../common/Wrappers";

const PortfolioWrapper = styled.div`
  opacity: 1;
  transform: translate(0px, 0px);
  width: 80%;
  height: 100vh;
  position: relative;`

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding-bottom: 46%;
  display: block;
  height: 1px;
  margin-top: 5vw;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, .8), 40%, rgba(7, 7, 7, 0.16));
    z-index: -1;
  }
`

const Image = styled.div<{ bgImg: string }>`
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


const IconButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: .75s;
  z-index: 1;

  :hover {
    opacity: 1;
  }
`

const TitleWrapper = styled.div`
  position: absolute;
  height: 2vh;
  bottom: 4.2vw;
  left: 2vw;
`


export const IconButton = styled.div`
  font-size: 2vw;
  height: 3vw;
  width: 3vw;
  border-style: solid;
  border-color: #fff;
  border-width: 0.1rem;
  border-radius: 50%;
  position: absolute;
  right: 2vw;
  bottom: 2vw;
  z-index: 2;`

const Arrow = styled.span`
  position: absolute;
  top: 1.2vw;
  right: 1.3vw;
  border: solid white;
  border-width: 0 0.2vw 0.2vw 0;
  display: inline-block;
  padding: 0.2vw;
  transform: rotate(-45deg);`

export const MyProject = () => {
    const project = store.project
    return (
        <PortfolioWrapper>
            {
                project.map(m => {
                    return (
                        <ImageWrapper key={m.id}>
                            <IconButtonWrapper>
                                <IconButton>
                                    <Arrow/>
                                </IconButton>
                            </IconButtonWrapper>
                            <TitleWrapper>
                                <Text width={32} mrgLeft={0} mrgIn={0} fontSz={2}>{m.title}</Text>
                                <LineSeparator width={2.5} colorOpacity={1}/>
                            </TitleWrapper>
                            <Image bgImg={m.img}/>
                        </ImageWrapper>)
                })
            }
        </PortfolioWrapper>
    )
}

