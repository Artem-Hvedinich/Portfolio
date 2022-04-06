import styled from "styled-components";
import Avatar from '../component/common/imege/avatar.jpg'

export const AvatarWrapper = styled.div`
  position: relative;
  width: 26vw;
  height: 32vw;
  transform: translate(0%, 0px) rotateY(15deg);
  opacity: 1;
`

export const PhotoWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

export const Photo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-position: center;
  background-size: 100%;
`

export const NameWrapper = styled.div`
  position: absolute;
  left: 1vw;
  bottom: 5vh;
  z-index: 10;
`

export const Name = styled.p`
  letter-spacing: 0.7vw;
  font-size: 1.5vw;
  line-height: 1.48vw;
  color: #fff;
`
export const LineSeparator = styled.p`
  width: 7vw;
  height: 0;
  border-width: 0;
  margin-top: 1rem;
  border-color: #fff;
  border-style: solid;
  border-bottom-width: 0.1rem;
  opacity: 0.6;
`

export const Line = styled.div <{
    opacity: number,
    width: any, height: any
}>`
  position: fixed;
  z-index: -1;
  border-style: solid;
  border-width: 0.1rem;
  border-color: #ffffff;
  width: 100%;
  height: 100%;
  opacity: ${props => props.opacity || 1};
  transform: ${props => `translate(${props.width}rem,${props.height}rem)`}
`


export const Avatar2 = () => {
    return (
        <AvatarWrapper>
            <PhotoWrapper>
                <Photo src={Avatar}/>
            </PhotoWrapper>
            <NameWrapper>
                <Name>Hvedinich Artem</Name>
                <LineSeparator/>
            </NameWrapper>
            <Line opacity={0.25} width={-1} height={1}/>
            <Line opacity={0.15} width={-2} height={2}/>
            <Line opacity={.05} width={-3} height={3}/>
        </AvatarWrapper>
    )
}