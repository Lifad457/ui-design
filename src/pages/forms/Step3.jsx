import { 
    LeftCol, 
    Progress, 
    RightCol, 
    Wraper,
    Main } from "../../styles/forms/step3.css";
import GlobalStyle from "../../styles/forms/global-forms.css";

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
                    <h2>Account Setup</h2>

                    <label htmlFor="fname">First Name</label>
                    <input 
                        type="text" 
                        id="fname" 
                        name="fname" 
                        className="error-field" />
                    <p className="error">Sorry, this field is required.</p>
                    
                    <label htmlFor="lname">Last Name</label>
                    <input 
                        type="text" 
                        id="lname" 
                        name="lname" />
                    
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" />

                    <a href="forms" className="cta">Next</a>
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