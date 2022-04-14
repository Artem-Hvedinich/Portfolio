import React from 'react';
import styled from "styled-components";
import { AvatarMemo} from "./Avatar";

const LeftBlockWrapper = styled.div`
  position: fixed;
  min-height: 100%;
  min-width: 50%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 38rem;
  z-index: 2;
`

export const LeftBlock = () => {
    return (
        <LeftBlockWrapper>
            <AvatarMemo/>
        </LeftBlockWrapper>
    );
};

