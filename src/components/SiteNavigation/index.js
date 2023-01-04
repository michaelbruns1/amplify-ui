import Section from "./Section";
import Logo from "./Logo";
import Container from "./Container";

import Wrapper from "./Wrapper";

const SiteNavigation = () => {
    return (
        <Section>
            <Wrapper>
                <Container>
                    <Logo /> 
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