import Section from "./Section";
import Logo from "../Logo";
import Container from "./Container";
import Wrapper from "./Wrapper";

const SiteNavigation = (props) => {
    return (
        <Section>
            <Wrapper>
                <Container>
                    <Logo height="45pt"
                        width="45pt"
                        transform="scale(1.0) translate(0%, 0%)"
                        background={props=> props.theme.colors.tertiary}
                         /> 
                </Container>
                <Container>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </Container>

            </Wrapper>
        </Section>
    );
}

export default SiteNavigation;