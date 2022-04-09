import styled from "styled-components";
import MyPhoto from '../common/imege/avatar.jpg'
import {Line} from "../common/Line/Line";
import {LineSeparator} from "../common/Wrappers";

export const AvatarWrapper = styled.div`
  position: relative;
  width: 26vw;
  height: 32vw;
  transform: translate(0%, 0px) rotateY(15deg);
  opacity: 1;
  z-index: 1;
  transition: transform 1s, opacity 1s;
: hover {
  opacity: 0.8;
  transform: translate(10%, 0) rotateY(0deg);
}`

export const PhotoWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;`

export const Photo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-position: center;
  background-size: 100%;`

export const NameWrapper = styled.div`
  position: absolute;
  left: 3vw;
  bottom: 3vh;
  z-index: 10;
  background-color: rgba(42, 38, 38, 0.2);`

export const Name = styled.p`
  letter-spacing: 0;
  font-size: 1vw;
  line-height: 0;
  color: #fff;`

export const Avatar = () => {
    return (
        <AvatarWrapper>
            <PhotoWrapper>
                <Photo src={MyPhoto}/>
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