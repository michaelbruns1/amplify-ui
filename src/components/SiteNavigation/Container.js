import React from "react";
import styled from "styled-components";

/*Create a container component that will be used to align the logo and navigation items vertically */

const StyledContainer = styled.div`
    display: flex; /* flexbox to align the logo and nav vertically */
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