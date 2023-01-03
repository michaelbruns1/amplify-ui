import React from "react";
import styled from "styled-components";

const StyledFlexContainer = styled.nav`
    display: flex; /* This is the default value, but it's good to be explicit */
    min-width:100vw; /* This ensures that the container is always as wide as the viewport */
    padding: 0 1rem; /* Add some padding so content doesn't touch the edges */
    `;

const FlexContainer = (props) => {
    return (
        <StyledFlexContainer>
            {props.children}
        </StyledFlexContainer>
    );
}
    
export default FlexContainer;