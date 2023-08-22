import GlobalStyle from "../styles/global-style.css";
import {
    StyledContentWrapper,
    StyledExitBtn,
    StyledHeader,
    StyledMenuBtn
} from '../styles/tea-place.css'
import plant from '../assets/images/plant.png'

function TeaPLace() {
    return (
        <div>
            <GlobalStyle />
            <StyledHeader>
                <a href="#" className="logo">TeaPlace</a>
                <nav>
                    <StyledMenuBtn />
                                        
                    <ul id="nav">
                        <li className="exit" id="exit-btn">
                            <StyledExitBtn />
                        </li>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Browse</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </StyledHeader>
            
            <StyledContentWrapper>
                <main>
                    <h1>The Ultimate Tea</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    
                    <div className="btn-container">
                        <a href="#" className="cta">Browse our Tea</a>
                        <a href="#" className="cta outline">Browse our Tea</a>
                    </div>
                </main>
                
                <div className="plant-container">
                    <img src={plant} className="plant" />
                </div>
            </StyledContentWrapper>
        </div>
    )
}

export default TeaPLace