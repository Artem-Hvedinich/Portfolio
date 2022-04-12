import React from 'react';
import {LineSeparator, Text, Title} from "./Wrappers";

type PropsType = {
    title: string
    text: string
    width: number
}

export const RightBlockTitle = (props: PropsType) => {
    return (
        <>
            <Title fontSz={1}>{props.title}</Title>
            <Text width={props.width} mrgLeft={1} mrgIn={2} fontSz={3}>{props.text}</Text>
            <LineSeparator width={3} colorOpacity={1}/>
        </>
    );
};