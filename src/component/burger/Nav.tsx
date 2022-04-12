import React from 'react';
import {Menu} from "./Menu";
import styled from "styled-components";
import {store} from "../../store/store";
import {Text} from "../common/Wrappers";
import {InstaImg} from "../common/imege/InstaImg";
import {TelegramImg} from '../common/imege/TelegramImg';
import {LinkedinImg} from "../common/imege/LinkedinImg";

const NavWrapper = styled.div<{ width: number, height: number }>`
  width: 100%;
  height: 100vh;
  transform: ${props => `translate(${props.width}%,${props.height}rem)`};
  transition: transform 1s;
  transition-delay: 0.25s;
  background-color: rgba(17, 14, 14, 0.93)`

const MenuWrapper = styled.div <{ height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  transform: ${props => `translate(0,${props.height}vw)`};
  transition: all 1s;
  transition-delay: 0.75s;
  left: 4vw;`

const TextSocial = styled(Text)`
  font-size: 1.3vw;
  color: #7c7c7c;
  font-weight: bolder;
`
const TextMenu = styled(TextSocial)`
  padding-left: 2rem;
  cursor: initial;
  margin-bottom: 3vw;
`
const SocialWrapper = styled.div`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  font-size: 1.3vw;
  margin-top: 5vh`


const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 2vw;`

type PropsType = {
    active: boolean
}
export const Nav = (props: PropsType) => {
    const menu = store.menu
    const width = props.active ? 0 : 100
    const height = props.active ? 0 : -40

    return (
        <NavWrapper width={width} height={0}>
            <MenuWrapper height={height}>
                <TextMenu>Menu</TextMenu>
                <Menu active={props.active} menu={menu}/>
                <SocialWrapper>
                    <TextSocial>Social</TextSocial>
                    <IconWrapper>
                        <InstaImg/>
                        <TelegramImg/>
                        <LinkedinImg/>
                    </IconWrapper>
                </SocialWrapper>
            </MenuWrapper>
        </NavWrapper>
    );
};

