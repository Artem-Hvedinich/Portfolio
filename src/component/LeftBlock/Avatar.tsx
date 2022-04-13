import styled from "styled-components";
import MyPhoto from '../common/imege/avatar.jpg'
import {Line, LineSeparator} from "../common/Wrappers";

export const AvatarWrapper = styled.div`
  position: relative;
  width: 24vw;
  height: 32vw;
  transform: translate(0%, 0px) rotateY(15deg);
  opacity: 1;
  z-index: 1;
  transition: transform 1s, opacity 1s;: hover {
  opacity: 0.8;
  transform: translate(10%, 0) rotateY(0deg);
}`

export const PhotoWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: block;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), 20%, rgba(7, 7, 7, 0));
`

export const Photo = styled.div<{ bgImg: string }>`
  background-size: cover;
  position: absolute;
  background-position: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-color: black;
  background-image: url("${props => props.bgImg}");`

export const NameWrapper = styled.div`
  position: absolute;
  left: 3vw;
  bottom: 3vw;
  z-index: 1;`

export const Name = styled.p`
  letter-spacing: 0;
  font-size: 1vw;
  line-height: 0;
  color: #fff;`

export const Avatar = () => {
    return (
        <AvatarWrapper>
            <PhotoWrapper>
                <Photo bgImg={MyPhoto}/>
            </PhotoWrapper>
            <NameWrapper>
                <Name>Hvedinich Artem</Name>
                <LineSeparator width={3} colorOpacity={1}/>
            </NameWrapper>
            <Line opacity={0.25} width={-1} height={1}/>
            <Line opacity={0.15} width={-2} height={2}/>
            <Line opacity={.05} width={-3} height={3}/>
            <Line opacity={.02} width={-4} height={4}/>
        </AvatarWrapper>
    )
}