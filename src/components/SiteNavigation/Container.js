import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex; /* This is the default value, but it's good to be explicit */
    gap: ${props => props.gap || '1px'}; /* Add some space between the navigation items */
    align-items: center; /* Align the navigation items to the center */
    
    `;
const Container = (props) => {
    return (
        <StyledContainer gap={props.gap}>
            {props.children}
        </StyledContainer>
    );
}

export default Container;