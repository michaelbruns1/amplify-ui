import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex; /* This is the default value, but it's good to be explicit */
    gap: 1rem; /* Add some space between the navigation items */
    border: 1px solid red;
    align-items: center; /* Align the navigation items to the center */
    `;
const Container = (props) => {
    return (
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
}

export default Container;