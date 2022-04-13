import React from 'react';
import {Nav} from "./Nav";
import OutsideAlerter from "../common/Hook/CloseOnClick";
import {BurgerDeleteIcon} from "./BurgerDeleteIcon";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: fixed;
  right: 0;
  width: 25%;
  z-index: 60;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 1s;
  transition-delay: 0.5s;
`

type BurgerPropsType = {
    active: boolean
    setActive: (active: boolean) => void
}
export const Burger: React.FC<BurgerPropsType> = ({active, setActive}) => {

    const outsideHandler = () => {
        setActive(false)
    }

    return (
        <OutsideAlerter active={active} outsideHandler={outsideHandler}>
            <BurgerDeleteIcon active={active} onChange={setActive}/>
            {active ? <NavWrapper><Nav setActive={setActive} active={active}/></NavWrapper>
                : <NavWrapper><Nav setActive={setActive} active={active}/></NavWrapper>
            }
        </OutsideAlerter>
    )
}

