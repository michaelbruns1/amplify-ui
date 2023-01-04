import Section from "./Section";
import Logo from "../Logo";
import Container from "./Container";
import Wrapper from "./Wrapper";
import styled from "styled-components";

const StyledLinks = styled.a`
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0 1rem;
    transform: ${props => props.transform};
    border-bottom: 2px solid ${props => props.theme.colors.clear};
    &:hover {
        color: ${props => props.theme.colors.secondary};
        border-bottom: 2px solid ${props => props.theme.colors.secondary};
    }
`;

const StyledLinkButtons = styled.a`
color: ${props => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0 0rem;
    border-radius: 5px;
    transform: ${props => props.transform};
    border: 2px solid ${props => props.theme.colors.clear};
    &:hover {
        color: ${props => props.theme.colors.secondary};
        border: 2px solid ${props => props.theme.colors.secondary};
    }
`;



const SiteNavigation = (props) => {
    return (
        <Section>
            <Wrapper>
                <Container>
                    <Logo height="55pt"
                        width="55pt"
                        transform="scale(1.2) translate(0%, 0%)"
                        background={props=> props.theme.colors.tertiary}
                         /> 
                </Container>
                <Container>
                    <StyledLinks  href="/">Home</StyledLinks>
                    <StyledLinks  href="/about">About</StyledLinks>
                    <StyledLinks  href="/contact">Contact</StyledLinks>
                </Container>
                <Container gap="0px">
                    <StyledLinkButtons  href="/">Sign Up</StyledLinkButtons>
                    <StyledLinkButtons  href="/">Account</StyledLinkButtons>
                </Container>
            </Wrapper>
        </Section>
    );
}

export default SiteNavigation;