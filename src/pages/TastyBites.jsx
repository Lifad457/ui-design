import GlobalStyle from "../styles/global-style.css"
import healthyfood from "../assets/images/healthyfood.jpg"
import 
{
    StyledImg,
    StyledLogo,
    StyledNav,
    StyledHeader,
    StyledHeroLeft,
    StyledSection
} from "../styles/tasty-bites.css"

function TastyBites() {
    return (
        <div>
            <GlobalStyle />

            <StyledHeader>
                <StyledLogo href="#">tastybites</StyledLogo>
                <StyledNav>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </StyledNav>
            </StyledHeader>
            
            <StyledHeroLeft>
                <h1>Absolutely Tasty Bites</h1>
                <p>Get all of the best food without tasting their nastiness</p>
                <a href="#" className="cta-btn">Download app</a>
            </StyledHeroLeft>
            <StyledImg src={healthyfood} />
            
            <StyledSection>
                <ul>
                    <li>
                        <blockquote>
                            <p>{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}</p>
                            <footer>- John Doe</footer>
                        </blockquote>
                    </li>
                    <li>
                        <blockquote>
                            <p>{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}</p>
                            <footer>- John Doe</footer>
                        </blockquote>
                    </li>
                    <li>
                        <blockquote>
                            <p>{"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"}</p>
                            <footer>- John Doe</footer>
                        </blockquote>
                    </li>
                </ul>
            </StyledSection>
        </div>
    )
}

export default TastyBites