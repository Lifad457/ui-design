import GlobalStyle from "../styles/global-style.css";
import {
    StyledHeader,
    Styledlink
} from '../styles/tea-place.css'

function TeaPLace() {
    return (
        <div>
            <GlobalStyle />
            <StyledHeader>
                <Styledlink href="#">TeaPlace</Styledlink>
                
                <nav>
                    <svg className="menu" id="menu-btn" viewBox="0 0 27.329 17">
                        <g transform="translate(-415.671 -19)">
                            <line  x1="24.329" transform="translate(417.171 34.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
                            <line x1="24.329" transform="translate(417.171 27.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
                            <line x1="17" transform="translate(424.5 20.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="3"/>
                        </g>
                    </svg>
                    
                    <ul id="nav">
                        <li className="exit" id="exit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48.968" height="48.968" viewBox="0 0 48.968 48.968">
                                <g transform="translate(-378.092 -80.939)">
                                    <path id="Path_21" data-name="Path 21" d="M383,82l-46.847,46.847" transform="translate(43)" fill="none" stroke="#000" stroke-width="3"/>
                                    <path id="Path_22" data-name="Path 22" d="M336.153,82l46.673,46.673" transform="translate(43)" fill="none" stroke="#000" stroke-width="3"/>
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
            
            <div className="content-wrapper">
                <main>
                    <h1>The Ultimate Tea</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    
                    <div className="btn-container">
                        <a href="#" className="cta">Browse our Tea</a>
                        <a href="#" className="cta outline">Browse our Tea</a>
                    </div>
                </main>
                
                <div className="plant-container">
                    <img src="plant.png" className="plant" />
                </div>
            </div>
        </div>
    )
}

export default TeaPLace