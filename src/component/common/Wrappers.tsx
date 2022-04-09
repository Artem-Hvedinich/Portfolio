import styled, {keyframes} from "styled-components";
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
  justify-content: center;`

export const Text = styled.p<{
    width?: number, fontSz: number,
    mrgIn: number, mrgLeft: number
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

