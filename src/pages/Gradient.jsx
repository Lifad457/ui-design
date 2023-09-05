import GlobalStyle from "../styles/global-gradient.css"
import { StyledCard, StyledContainer } from "../styles/gradient.css"

function Gradient() {
    return (
        <>
            <GlobalStyle />

            <StyledContainer>
                <StyledCard>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <a href="#">Want more?</a>
                </StyledCard>
                <StyledCard>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <a href="#">Want more?</a>
                </StyledCard>
                <StyledCard>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <a href="#">Want more?</a>
                </StyledCard>
            </StyledContainer>
        </>
    )
}
export default Gradient