import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex; /* flexbox to align the logo and nav vertically */
    border: 1px solid red;
    margin: 0 auto; /* Center the content */
    max-width:1100px; /* Set a max-width, otherwise the content will stretch the whole width of the screen */
    place-content: center space-between;
 `;

const Wrapper = (props) => {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    );
}

export default Wrapper;