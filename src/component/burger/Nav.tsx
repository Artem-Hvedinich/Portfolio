import React, {useRef, useCallback, useEffect} from "react";
import {Menu} from "./Menu";
import styled from "styled-components";
import {store} from "../../store/store";
import {Text} from "../common/Wrappers";
import {InstaImg} from "../common/imege/InstaImg";
import {TelegramImg} from "../common/imege/TelegramImg";
import {LinkedinImg} from "../common/imege/LinkedinImg";
import {Link, NavLink} from "react-router-dom";

const NavWrapper = styled.div<{ active: boolean }>`
  width: 25%;
  height: 100vh;
  background-color: rgba(17, 14, 14, 0.93);
  transform: ${(props) => `translate(${props.active ? 0 : 100}%,0rem)`};
  transition: transform 1s;
  transition-delay: 0.25s;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 60;
`;

const MenuWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 4vw;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: ${(props) => `translate(0,${props.active ? 0 : -70}vw)`};
  transition: transform 1s, opacity 2s;
  transition-delay: 0.75s;
`;

const TextSocial = styled(Text)`
  font-size: 1.3vw;
  color: #7c7c7c;
  font-weight: bolder;
`;
const TextMenu = styled(TextSocial)`
  cursor: initial;
  margin-bottom: 3vw;
`;
const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0 0 -4vw;
`;

const IconWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const Nav = ({
                        active,
                        setActive,
                    }: {
    active: boolean;
    setActive: (active: boolean) => void;
}) => {
    const wrapperRef = useRef<any>(null);

    const outsideHandler = useCallback(
        (e: any) => {
            if (active && !wrapperRef.current.contains(e.target)) {
                setActive(false);
            }
        },
        [active]
    );

    useEffect(() => {
        window.addEventListener("click", outsideHandler);
        return () => {
            window.removeEventListener("click", outsideHandler);
        };
    }, [outsideHandler]);

    const menu = store.menu;
    return (
        <NavWrapper active={active} ref={wrapperRef}>
            <MenuWrapper active={active}>
                <TextMenu>Menu</TextMenu>
                <Menu active={active} setActive={setActive} menu={menu}/>
                <SocialWrapper>
                    <TextSocial>Social</TextSocial>
                    <IconWrapper>
                        <a href={'https://www.linkedin.com/in/artem-hvedinich/'}><LinkedinImg/></a>
                        <a href={'https://t.me/hvedinich'}><TelegramImg/></a>
                        <a href={'https://www.instagram.com/artem_hvedinich/'}><InstaImg/></a>
                    </IconWrapper>
                </SocialWrapper>
            </MenuWrapper>
        </NavWrapper>
    );
};
