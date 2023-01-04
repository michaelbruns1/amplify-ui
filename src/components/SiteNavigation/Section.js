import React from "react";
import styled from "styled-components";

const StyledSection = styled.nav`
    background-color: #f1f1f1;
    padding: .5rem; /* Add some padding so content doesn't touch the edges of the page */
    `;

const Section = (props) => {
    return (
        <StyledSection>
            {props.children}
        </StyledSection>
    );
}
    
export default Section;