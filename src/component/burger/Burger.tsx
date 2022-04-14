import React, {useCallback} from "react";
import styled from "styled-components";

const BurgerWrapper = styled.div`
  position: absolute;
  right: 3rem;
  top: 3rem;
  z-index: 61;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 1.5rem;
`;

const Line = styled.div<{
    width?: any;
    height?: any;
    rotate?: any;
}>`
  border-color: #ffffff;
  border-style: solid;
  height: 0;
  width: 100%;
  border-width: 0;
  border-bottom: 0.1rem solid #ffffff;
  display: block;
  transition: 0.5s;
  transform: ${(props) =>
          `translate(${props.width}rem,${props.height}rem) rotate(${props.rotate}deg)`};
`;

type Props = {
    active: boolean;
    onChange: (active: boolean) => void;
};

export const Burger: React.FC<Props> = ({active, onChange}) => {
    const onClick = useCallback(() => {
            onChange(!active);
        }, [active]
    )

    return (
        <BurgerWrapper onClick={onClick}>
            {active ? (
                <Wrapper>
                    <Line width={0} height={0.2} rotate={45}/>
                    <Line width={0} height={-0.4} rotate={-45}/>
                </Wrapper>
            ) : (
                <Wrapper>
                    <Line width={0} height={0}/>
                    <Line width={0} height={0}/>
                </Wrapper>
            )}
        </BurgerWrapper>
    );
};
