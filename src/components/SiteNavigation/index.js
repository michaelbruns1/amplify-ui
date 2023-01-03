import FlexContainer from "./FlexContainer";
import LogoContainer from "./LogoContainer";
import NavigationContainer from "./NavigationContainer";
import NavigationGroup from "./NavigationGroup";
import ContentWrapper from "./ContentWrapper";

const SiteNavigation = () => {
    return (
        <FlexContainer>
            <ContentWrapper>
                <LogoContainer />
                
                    <NavigationGroup>
                <NavigationContainer>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </NavigationContainer>
                    </NavigationGroup>

            </ContentWrapper>
        </FlexContainer>
    );
}

export default SiteNavigation;