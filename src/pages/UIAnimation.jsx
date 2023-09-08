import person from "../assets/images/person.jpg"
import phone from "../assets/images/phone.svg"
import GlobalStyle from "../styles/global-ui-animation"
import { Wrapper, Col } from "../styles/ui-animation.css"

function UIAnimation() {
    return (
        <Wrapper>
            <GlobalStyle />
            <img src={phone} className="phone" />
            <Col className="left">
                <div className="inner-content">
                    <p className="subheading">The most comprehensive</p>
                    <h1>Analytics Data for your Apps</h1>
                    <a href="#" className="cta">Give it a shot</a>
                </div>
            </Col>
            <Col className="right">
                <ul>
                    <li>
                        <img src={person} />
                        <div className="info">
                            <p className="quote">&quot;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy&quot;</p>
                            <p className="auth">Gary Simon</p>
                        </div>
                    </li>
                    <li>
                        <img src={person} />
                        <div className="info">
                            <p className="quote">&quot;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy&quot;</p>
                            <p className="auth">Gary Simon</p>
                        </div>
                    </li>
                    <li>
                        <img src={person} />
                        <div className="info">
                            <p className="quote">&quot;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy&quot;</p>
                            <p className="auth">Gary Simon</p>
                        </div>
                    </li>
                </ul>
            </Col>
        </Wrapper>
    )
}
export default UIAnimation