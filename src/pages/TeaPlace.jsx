import GlobalStyle from "../styles/global-tea-place.css";
import {
    StyledContentWrapper,
    StyledFern,
    StyledHeader,
    StyledMenuBtn
} from '../styles/tea-place.css'
import plant from '../assets/images/plant.png'
import { useState } from "react";

function TeaPLace() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <GlobalStyle />

            <div className="left-col"></div>
            <StyledFern></StyledFern>
            <StyledHeader $visible={isVisible}>
                <a href="#" className="logo">TeaPlace</a>
                <nav>
                    <StyledMenuBtn onClick={() => setIsVisible(true)} />
                                        
                    <ul id="nav">
                        <li className="exit" id="exit-btn" onClick={() => setIsVisible(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48.968" height="48.968" viewBox="0 0 48.968 48.968" >
                                <g transform="translate(-378.092 -80.939)">
                                    <path id="Path_21" data-name="Path 21" d="M383,82l-46.847,46.847" transform="translate(43)" fill="none" stroke="#000" strokeWidth="3"/>
                                    <path id="Path_22" data-name="Path 22" d="M336.153,82l46.673,46.673" transform="translate(43)" fill="none" stroke="#000" strokeWidth="3"/>
                                </g>
                            </svg>
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
                        <a href="#" className="cta outline">Buy Now</a>
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