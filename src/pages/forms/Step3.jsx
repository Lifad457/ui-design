import { 
    LeftCol, 
    Progress, 
    RightCol, 
    Wraper,
    Main } from "../../styles/forms.css";
import GlobalStyle from "../../styles/global-forms.css";

function Step3() {
    return (
        <Wraper>
            <GlobalStyle />
            
            <h1>Become a Member!</h1>

            <Progress>
                <li>
                    <a href="forms">
                       <div className="circle">1</div>
                       <span>Account</span> 
                    </a>
                </li>
                <li>
                    <a href="step2">
                       <div className="circle">2</div>
                       <span>Details</span> 
                    </a>
                </li>
                <li className="current">
                    <a href="step3">
                       <div className="circle">3</div>
                       <span>Confirmation</span> 
                    </a>
                </li>
            </Progress>

            <Main>
                <LeftCol>
                    <h2>Confirmation</h2>
                    
                    <label htmlFor="tos" className="mt-extra">Terms of Service</label>
                    <textarea id="tos" className="extra-height">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                    
                    <input type="checkbox" name="cb" id="cb" />
                    <label htmlFor="cb" id="checkbox">
                        <svg viewBox="0 0 100 100">
                            <path className="box" d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"/>
                            <polyline className="check" points="25.5,53.5 39.5,67.5 72.5,34.5 "/>
                        </svg>
                        <span className="tos-span">I agree to the Terms of Service</span>
                    </label>
                    
                    <a href="forms" className="cta">Complete Signup</a>
                </LeftCol>
                <RightCol>
                    <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                </RightCol>
            </Main>
        </Wraper>
    )
}

export default Step3