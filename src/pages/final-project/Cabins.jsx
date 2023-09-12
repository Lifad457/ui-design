import cabin1 from "../../assets/images/final-project/cabin1.jpg"
import cabin2 from "../../assets/images/final-project/cabin2.jpg"
import cabin3 from "../../assets/images/final-project/cabin3.jpg"
import arrows from "../../assets/images/final-project/arrows-black.svg"
import menu from "../../assets/images/final-project/menu.svg"
import exit from "../../assets/images/final-project/exit.svg"
import GlobalStyle from "../../styles/global-FP.css"
import { Hero, 
    SubHero,
    NoPadding } from "../../styles/final-project.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function Cabins() {
    const [navMenu, setNavMenu] = useState(false);

    return (
        <>
            <GlobalStyle background="#ffffff" />
            
            <SubHero>
                <NoPadding $navMenu={navMenu}>
                    <header>
                        <Link to=".." className="logo">scenic.forests</Link>
                        
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
                                <li className="active"><Link to="..">Home</Link></li>
                                <li><Link to=".">Cabins</Link></li>
                                <li><a href="#">FAQ</a></li>
                                <li className="res"><a href="#">Reservations</a></li>
                            </ul>
                        </nav>
                    </header>
                </NoPadding>
                
                <Hero>
                    
                    <div className="main-copy">
                        
                        <div className="bread-wrapper">
                            <ul className="breadcrumbs">
                                <li><Link to="..">Home</Link></li>
                                <li>&gt; Our Cabins</li>
                            </ul>
                        </div>
                        
                        <h1>
                            <span>Our Cabins</span>
                        </h1>
                        
                        <p className="sub-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>

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

                </Hero>

            </SubHero>
        </>
    )
}
export default Cabins