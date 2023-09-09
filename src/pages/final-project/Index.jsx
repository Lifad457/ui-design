import cabin1 from "../../assets/images/final-project/cabin1.jpg"
import cabin2 from "../../assets/images/final-project/cabin2.jpg"
import cabin3 from "../../assets/images/final-project/cabin3.jpg"
import arrows from "../../assets/images/final-project/arrows.svg"
import menu from "../../assets/images/final-project/menu.svg"
import exit from "../../assets/images/final-project/exit.svg"
import icon_wifi from "../../assets/images/final-project/icon-wifi.svg"
import icon_stocked from "../../assets/images/final-project/icon-stocked.svg"
import icon_hottub from "../../assets/images/final-project/icon-hottub.svg"
import fern from "../../assets/images/final-project/fern.svg"
import person from "../../assets/images/final-project/person.jpg"
import { 
    ForrestHero,
    Wrapper,
    NoPadding, 
    Hero,
    LastContainer,
    FeatureContainer} from "../../styles/final-project.css";
import GlobalStyle from "../../styles/global-FP.css";
import { useState } from "react"

function Index() {
    const [navMenu, setNavMenu] = useState(false);

    return (
        <>
            <GlobalStyle />
            
            <ForrestHero>
                <NoPadding $navMenu={navMenu}>
                    <header>
                        <a href="index.html" className="logo">scenic.forests</a>
                        
                        <nav>
                            <img src={menu} 
                                className="menu" 
                                id="menu-btn" 
                                alt="open menu"
                                onClick={() => setNavMenu(true)} />
                            
                            <ul className="nav" id="nav">
                                <li className="exit" id="exit-btn">
                                    <a href="#" onClick={() => setNavMenu(false)}><img src={exit} /></a>
                                </li>
                                <li className="active"><a href="final-project">Home</a></li>
                                <li><a href="#">Cabins</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li className="res"><a href="#">Reservations</a></li>
                            </ul>
                        </nav>
                    </header>
                </NoPadding>

                <Hero>
                    <div className="flex">
                        <div className="left main-copy">
                            <p className="subtitle">Forest Vacations</p>
                            <h1>
                                <span>Scenic</span>
                                <span>Beauties</span>
                                <span>Await you</span>
                            </h1>
                            
                            <a href="cabins.html" className="cta">All Rentals</a>
                        </div>
                        <ul className="featured-cabins">
                            <li>
                                <a href="#"><img src={cabin1} className="cabin-img" /></a>
                                
                                <p className="cabin-title">Whispering Willows</p>
                                <p className="cabin-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                
                                <a href="#" className="cabin-cta">
                                    <span>Cabin Info</span>
                                    <img src={arrows} />
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src={cabin2} className="cabin-img" /></a>
                                
                                <p className="cabin-title">Whispering Willows</p>
                                <p className="cabin-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                
                                <a href="#" className="cabin-cta">
                                    <span>Cabin Info</span>
                                    <img src={arrows} />
                                </a>
                            </li>
                            <li>
                                <a href="#"><img src={cabin3} className="cabin-img" /></a>
                                
                                <p className="cabin-title">Whispering Willows</p>
                                <p className="cabin-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                
                                <a href="#" className="cabin-cta">
                                    <span>Cabin Info</span>
                                    <img src={arrows} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Hero>
            </ForrestHero>
                
            <FeatureContainer>
                <Wrapper>
                    <ul className="features">
                        <li>
                            <img src={icon_wifi} />
                            
                            <h2>Free WiFi</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                        </li>
                        <li>
                            <img src={icon_stocked} />
                            
                            <h2>Free WiFi</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                        </li>
                        <li>
                            <img src={icon_hottub} />
                            
                            <h2>Free WiFi</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                        </li>
                    </ul>
                </Wrapper>
            </FeatureContainer>
            
            <LastContainer>
                <blockquote className="main-quote">&quot;I seriously wasn&apos;t expecting this beauty.&quot;</blockquote>
                <cite className="main-cite">-- Jane Doe</cite>
                
                <div className="flex">
                    <div className="left bio">
                        <h3>We serve excellence</h3>
                        
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
                        
                        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                    </div>
                    
                    <ul className="testimonials">
                        <li>
                            <img src={person} className="test-img" />
                            
                            <div className="test-left">
                                <p className="test-desc">&quot;My family and I absolutely love our cabin vacation!&quot;</p>
                                <p className="test-auth">-- John Doe</p>
                            </div>
                        </li>
                        <li>
                            <img src={person} className="test-img" />
                            
                            <div className="test-left">
                                <p className="test-desc">&quot;My family and I absolutely love our cabin vacation!&quot;</p>
                                <p className="test-auth">-- John Doe</p>
                            </div>
                        </li>
                        <li>
                            <img src={person} className="test-img" />
                            
                            <div className="test-left">
                                <p className="test-desc">&quot;My family and I absolutely love our cabin vacation!&quot;</p>
                                <p className="test-auth">-- John Doe</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <img src={fern} className="fern" />
            </LastContainer>
        </>
    )
}
export default Index