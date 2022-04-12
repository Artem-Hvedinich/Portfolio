import React from 'react';
import {LineSeparator, Text, Title, Wrapper} from "../common/Wrappers";

export const Home = () => {
    return (
        <Wrapper id={'Home'}>
            <div>
                <Title fontSz={1}> INTRODUCTION</Title>
                <Text mrgLeft={3} mrgIn={3} fontSz={5}>I'm Frontend Developer & Technology Expert</Text>
                <LineSeparator width={3} colorOpacity={1}/>
            </div>
        </Wrapper>
    )
}


