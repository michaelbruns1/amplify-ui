import React from "react";
import styled from "styled-components";

const StyledNavigationGroup = styled.div`
    display: flex; /* This is the default value, but it's good to be explicit */
    width: 100%; /* Ensure that the navigation group takes up all the available space */
    justify-content:flex-end; /* Align the navigation items to the right */
    `;
const NavigationGroup = (props) => {
    return (
        <StyledNavigationGroup>
            {props.children}
        </StyledNavigationGroup>
    );
}

export default NavigationGroup;