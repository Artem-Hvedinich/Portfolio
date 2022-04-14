import { useState } from "react";
import styled from "styled-components";
import { RightBlock } from "./component/RightBlock/RightBlock";
import { LeftBlock } from "./component/LeftBlock/LeftBlock";
import { gradient } from "./component/common/Wrappers";
import { Nav } from "./component/burger/Nav";
import { Burger } from "./component/burger/Burger";

const AppWrapper = styled.div`
  position: fixed;
  min-width: 100vw;
  top: 0;
  left: 0;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(300deg, #101010, #1f1d1d);
  background-size: 500% 500%;
  opacity: 1;
  transform: translate(0px, 0px);
  animation: ${gradient} 5s ease infinite;
`;

const NavOnOff = styled.div<{ width: number; opacity: number }>`
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  overflow: hidden;
  transition: opacity 1s, transform 1s;
  opacity: ${(props) => props.opacity};
  transform: ${(props) => `translate(${props.width}%,0px)`};
  transition-delay: 0.25s;
`;

function App() {
  const [active, setActive] = useState(false);

  return (
    <AppWrapper>
      <NavOnOff opacity={active ? 0.6 : 1} width={active ? -25 : 0}>
        <LeftBlock />
        <RightBlock />
      </NavOnOff>
      <Burger active={active} onChange={setActive} />
      <Nav setActive={setActive} active={active} />
    </AppWrapper>
  );
}

export default App;
