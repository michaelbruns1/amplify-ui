import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
    display: inline-block; /* This is the default value, but it's good to be explicit */
    width: 45px;  /* Set a width and height so the browser knows how much space to allocate for the element */
    height: 65px;
    background-image: url('./dogLogo.svg'); /* Set the background image */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: 140%; /* Resize the background image to cover the entire container */
    background-color: #fff; /* Set a background color in case the image is transparent */
    border-radius: 5%; /* Make the image a circle */
    
`;

const Logo = (props) => {
    return (
        <StyledLogo>
            {props.children}
        </StyledLogo>
    );
}

export default Logo;