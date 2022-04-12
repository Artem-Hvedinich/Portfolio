import React from 'react';
import {MenuType} from "../../store/store";
import styled from "styled-components";

const MainBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  margin-bottom: 2vw;

`

const TextNav = styled.a`
  font-size: 1.3vw;
  font-weight: bolder;
  color: #7c7c7c;
  cursor: pointer;
  transition: all 0.25s;
  text-decoration: none;

  :hover {
    color: #e3af00;
  }`
const Img = styled.svg`
  display: inline-block;
  width: 2vw;
  height: 2vw;
  color: #7c7c7c;
  font-size: 2rem;
  padding-right: 2vw;
  position: relative;
  text-align: center;
  transition: .2s ease;`

type propsMenuType = {
    menu: Array<MenuType>
    active: boolean
}

export const Menu = (props: propsMenuType) => {
    return (
        <>
            {props.menu.map((m) => {
                    return (
                        <MainBlock key={m.id}>
                            <Img>{m.img}</Img>
                            <TextNav href={`#${m.title}`}>{m.title}</TextNav>
                        </MainBlock>
                    )
                }
            )
            }
        </>
    )
}
