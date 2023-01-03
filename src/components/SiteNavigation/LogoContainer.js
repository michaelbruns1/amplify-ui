import React from "react";
import styled from "styled-components";

const StyledLogoContainer = styled.div`
    display: inline-block; /* This is the default value, but it's good to be explicit */
    width: 100px;  /* Set a width and height so the browser knows how much space to allocate for the element */
    height: 100px;
    background-image: url('./dogLogo.svg'); /* Set the background image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: 100%; /* Resize the background image to cover the entire element */
    background-color: #fff; /* Set a background color in case the image is transparent */
    border-radius: 50%; /* Make the image a circle */
    margin: 0 1rem; /* Add some margin to the left and right to create some space between the logo and the navigation */
`;

const LogoContainer = (props) => {
    return (
        <StyledLogoContainer>
            {props.children}
        </StyledLogoContainer>
    );
}

export default LogoContainer;