import React from 'react';
import styled from "styled-components";
import {gradient} from "./Wrappers";

const Layer = styled.div<{ rotate: number, right: number, top: number }>`
  position: fixed;
  border-style: solid;
  width: 5vw;
  height: 50vh;
  border-width: 1px;
  background: linear-gradient(90deg, #000000, #101010);
  background-size: 300% 300%;
  opacity: 0.1;
  animation: ${gradient} 5s ease infinite;
  right: ${props => `${props.right}rem`};
  top: ${props => `${props.top}rem`};
  transform: rotate(${props => `${props.rotate}deg`});
`

export const Styles = () => {

    return (
        <div style={{transform: 'translate(10%, 0px) rotate(30deg) ', opacity: '0.3', zIndex: '-20'}}>
            <Layer right={0} top={1} rotate={0}/>
            <Layer right={0.5} top={1.5} rotate={5}/>
            <Layer right={1} top={2} rotate={10}/>
            <Layer right={1.5} top={2.5} rotate={15}/>
            <Layer right={2} top={3} rotate={20}/>
            <Layer right={2.5} top={3.5} rotate={25}/>
            <Layer right={3} top={4} rotate={30}/>
            <Layer right={3.5} top={4.5} rotate={35}/>
            <Layer right={4} top={5} rotate={40}/>
            <Layer right={4.5} top={5.5} rotate={45}/>
            <Layer right={5} top={6} rotate={50}/>
            <Layer right={5.5} top={6.5} rotate={55}/>
            <Layer right={6} top={7} rotate={60}/>
            <Layer right={6.5} top={7.5} rotate={65}/>
            <Layer right={7} top={8} rotate={70}/>
            <Layer right={7.5} top={8.5} rotate={75}/>
            <Layer right={8} top={9} rotate={80}/>
            <Layer right={8.5} top={9.5} rotate={85}/>
            <Layer right={9} top={10} rotate={90}/>
            <Layer right={9.5} top={10.5} rotate={95}/>
            <Layer right={10} top={11} rotate={100}/>
            <Layer right={10.5} top={11.5} rotate={105}/>
            <Layer right={11} top={12} rotate={110}/>
            <Layer right={11.5} top={12.5} rotate={115}/>
            <Layer right={12} top={13} rotate={120}/>
            <Layer right={12.5} top={13.5} rotate={125}/>
            <Layer right={13} top={14} rotate={130}/>
            <Layer right={13.5} top={14.5} rotate={135}/>
            <Layer right={14} top={15} rotate={140}/>
            <Layer right={14.5} top={15.5} rotate={145}/>
            <Layer right={15} top={16} rotate={150}/>
            <Layer right={15.5} top={16.5} rotate={155}/>
            <Layer right={16} top={17} rotate={160}/>
            <Layer right={16.5} top={17.5} rotate={165}/>
            <Layer right={17} top={18} rotate={170}/>
            <Layer right={17.5} top={18.5} rotate={175}/>
            <Layer right={18} top={19} rotate={180}/>
            <Layer right={18.5} top={19.5} rotate={185}/>
            <Layer right={19} top={20} rotate={190}/>
            <Layer right={19.5} top={20.5} rotate={195}/>
            <Layer right={20} top={21} rotate={200}/>
            <Layer right={20.5} top={21.5} rotate={205}/>
            <Layer right={21} top={22} rotate={210}/>
            <Layer right={21.5} top={22.5} rotate={215}/>
            <Layer right={22} top={23} rotate={220}/>
            <Layer right={22.5} top={23.5} rotate={225}/>
            <Layer right={23} top={24} rotate={230}/>
            <Layer right={23.5} top={24.5} rotate={235}/>
            <Layer right={24} top={25} rotate={240}/>
            <Layer right={24.5} top={25.5} rotate={245}/>
            <Layer right={25} top={26} rotate={250}/>
            <Layer right={25.5} top={26.5} rotate={255}/>
            <Layer right={26} top={27} rotate={260}/>
            <Layer right={26.5} top={27.5} rotate={265}/>
            <Layer right={27} top={28} rotate={270}/>
            <Layer right={27.5} top={28.5} rotate={275}/>
            <Layer right={28} top={29} rotate={280}/>
            <Layer right={28.5} top={29.5} rotate={285}/>
            <Layer right={29} top={30} rotate={290}/>
            <Layer right={29.5} top={30.5} rotate={295}/>
            <Layer right={30} top={31} rotate={300}/>
            {/*<Layer right={30.5} top={31.5} rotate={305}/>*/}
        </div>

    );
};
