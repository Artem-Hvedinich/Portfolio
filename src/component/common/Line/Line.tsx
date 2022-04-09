import styled from "styled-components";

export const Line = styled.div <{
    opacity?: number,
    width?: any, height?: any
}>`
  position: fixed;
  z-index: -1;
  border-style: solid;
  border-width: 0.1rem;
  border-color: #ffffff;
  width: 100%;
  height: 100%;
  opacity: ${props => props.opacity || 1};
  transform: ${props => `translate(${props.width}vw,${props.height}vh)`}
`
