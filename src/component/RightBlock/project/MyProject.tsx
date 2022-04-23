import React from "react";
import {store} from "../../../store/store";
import styled from "styled-components";
import {Arrow, IconButton, IconButtonWrapper, LineSeparator, Text} from "../../common/Wrappers";

const PortfolioWrapper = styled.div`
  opacity: 1;
  transform: translate(0px, 0px);
  width: 80%;
  position: relative;`

const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding-bottom: 46%;
  display: block;
  height: 1px;
  margin-top: 5vw;
  background: linear-gradient(to top, rgba(0, 0, 0, .8), 40%, rgba(7, 7, 7, 0.16));`

export const Image = styled.div<{ bgImg: string }>`
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

const TitleWrapper = styled.div`
  position: absolute;
  height: 2vh;
  bottom: 4.2vw;
  left: 2vw;`

export const MyProject = () => {
    const project = store.project


    return (
        <PortfolioWrapper>
            {
                project.map(m => <ImageWrapper key={m.id}>
                        <a href={m.href}>
                            <IconButtonWrapper>
                                <IconButton>
                                    <Arrow/>
                                </IconButton>
                            </IconButtonWrapper>
                        </a>
                        <TitleWrapper>
                            <Text width={32} mrgLeft={0} mrgIn={0} fontSz={2}>{m.title}</Text>
                            <LineSeparator width={2.5} colorOpacity={1}/>
                        </TitleWrapper>
                        <Image bgImg={m.img}/>
                    </ImageWrapper>
                )
            }
        </PortfolioWrapper>
    )
}

