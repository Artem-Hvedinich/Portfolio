import styled, {keyframes} from "styled-components";
import React from "react";

export const gradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }`

export const Title = styled.div<{ fontSz?: number }>`
  font-size: ${props => `${props.fontSz}vw` || '1px'};
  font-weight: bold;
  color: #fff;`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  margin-bottom: 10vw`

export const Text = styled.p<{
    width?: number, fontSz?: number,
    mrgIn?: number, mrgLeft?: number
}>`
  padding: 0;
  width: ${props => `${props.width}vw`};
  font-size: ${props => `${props.fontSz}vw` || '1px'};
  line-height: 1em;
  margin: ${props => `${props.mrgIn}vw ${props.mrgLeft}vw `};
  color: #fff;`


export const LineSeparator = styled.p<{ colorOpacity?: number, width?: number }>`
  width: ${props => `${props.width}vw`};
  height: 0;
  border-width: 0;
  margin-top: 2vh;
  border-color: rgba${props => `(255, 255, 255,${props.colorOpacity})`};
  border-style: solid;
  border-bottom-width: 0.1rem;
  opacity: 0.6;
  z-index: 100`

export const MainText = styled.p`
  font-size: 2vw;
  margin-top: 2vw;`

export const IconButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: .75s;
  z-index: 1;

  :hover {
    opacity: 1;
  }`

export const IconButton = styled.div`
  font-size: 2vw;
  height: 3vw;
  width: 3vw;
  border-style: solid;
  border-color: #fff;
  border-width: 0.1rem;
  border-radius: 50%;
  position: absolute;
  right: 2vw;
  bottom: 2vw;
  z-index: 2;`

export const Arrow = styled.a`
  position: absolute;
  top: 1.2vw;
  right: 1.3vw;
  border: solid white;
  border-width: 0 0.2vw 0.2vw 0;
  display: inline-block;
  padding: 0.2vw;
  transform: rotate(-45deg);`


export const Line = styled.div <{
    opacity?: number,
    width?: any, height?: any
}>`
  position: fixed;
  z-index: -3;
  border-style: solid;
  border-width: 0.1rem;
  border-color: #ffffff;
  width: 100%;
  height: 100%;
  opacity: ${props => props.opacity || 1};
  transform: ${props => `translate(${props.width}vw,${props.height}vh)`}
`
export const LineMemo = React.memo(Line)

export const SvgWrapper = styled.svg`
  cursor: pointer;

  & > path {
    transition: all 0.3s linear;
  }

  &:hover > path {
    fill: #e3af00 !important;
    stroke: #e3af00 !important;
    transition: all 0.3s
  }`