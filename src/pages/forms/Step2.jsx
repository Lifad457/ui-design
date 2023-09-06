import { 
    LeftCol, 
    Progress, 
    RightCol, 
    Wraper,
    Main } from "../../styles/forms.css";
import GlobalStyle from "../../styles/global-forms.css";

function Step2() {
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
                <li className="current">
                    <a href="step2">
                       <div className="circle">2</div>
                       <span>Details</span> 
                    </a>
                </li>
                <li>
                    <a href="step3">
                       <div className="circle">3</div>
                       <span>Confirmation</span> 
                    </a>
                </li>
            </Progress>

            <Main>
                <LeftCol>
                    <h2>Details</h2>
                    
                    <label htmlFor="loc">Country</label>
                    <select id="loc">
                        <option value="US">United States</option>
                        <option value="US">United States</option>
                        <option value="US">United States</option>
                        <option value="US">United States</option>
                        <option value="US">United States</option>
                    </select>
                    
                    <label>Gender</label>
                    
                    <input type="radio" id="male" name="gender" checked />
                    <label htmlFor="male" className="left-label">Male</label>
                    
                    <input type="radio" id="female" name="gender" checked />
                    <label htmlFor="female" className="left-label">Female</label>
                    
                    <label htmlFor="bio" className="mt-extra">Biography</label>
                    <textarea></textarea>
                    
                    <a href="step3" className="cta">Next</a>
                </LeftCol>
                <RightCol>
                    <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                </RightCol>
            </Main>
        </Wraper>
    )
}

export default Step2