import React from "react";
import styled from "styled-components";

const StyledContentWrapper = styled.div`
    display: flex; /* This is the default value, but it's good to be explicit */
    margin: 0 auto; /* Center the content */
    padding: 0 1rem; /* Add some padding on the left and right */
    max-width:1100px; /* Set a max-width, otherwise the content will stretch the whole width of the screen */
    width:100%; 

 `;

const ContentWrapper = (props) => {
    return (
        <StyledContentWrapper>
            {props.children}
        </StyledContentWrapper>
    );
}

export default ContentWrapper;