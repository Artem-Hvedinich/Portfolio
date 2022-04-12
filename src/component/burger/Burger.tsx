import React from 'react';
import {Nav} from "./Nav";
import OutsideAlerter from "../common/Hook/CloseOnClick";
import {BurgerDeleteIcon} from "./BurgerDeleteIcon";
import styled from "styled-components";

const NavWrapper = styled.div<{ width: number }>`
  position: fixed;
  right: 0;
  width: ${props => `${props.width}%`};
  z-index: 60;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 1s;
  transition-delay: 0.5s;`

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
            {active ? <NavWrapper width={25}><Nav active={active}/></NavWrapper> :
                <NavWrapper width={0}><Nav active={active}/></NavWrapper>}
        </OutsideAlerter>
    )
}

