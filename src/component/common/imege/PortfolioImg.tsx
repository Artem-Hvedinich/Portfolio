import React from 'react';
import {SvgWrapper} from "../Wrappers";

export const PortfolioImg = ({ className }: { className?: string }) => {
    return (
        <SvgWrapper width='1.5vw' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.931 255.931" className={className}>
            <path fill="#7c7c7c" d="M0,113.323h113.323V0H0V113.323z M11.934,11.934h89.455v89.455H11.934V11.934z"/>
            <path fill="#7c7c7c" d="M142.608,0v113.323h113.323V0H142.608z M243.997,101.389h-89.455V11.934h89.455V101.389z"/>
            <path fill="#7c7c7c" d="M0,255.931h113.323V142.602H0V255.931z M11.934,154.536h89.455v89.461H11.934V154.536z"/>
            <path fill="#7c7c7c" d="M142.608,255.931h113.323V142.602H142.608V255.931z M154.542,154.536h89.455v89.461h-89.455V154.536z"/>
        </SvgWrapper>
    )
}