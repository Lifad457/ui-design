
import { 
  StyledContainer,
  StyledImg,
  StyledDivLinks,
  StyledLink
} from '../styles/app.css'
import viteLogo from '../assets/icons/vite.svg'
import reactLogo from '../assets/icons/react.svg'
import AppGlobalStyle from '../styles/global-app.css'

function App() {

  return (
    <>
      <AppGlobalStyle />
      <StyledContainer>
        <div>
            <StyledImg src={viteLogo} alt="Vite logo" />
            <StyledImg src={reactLogo} alt="React logo" />
        </div>
        <h1>UI Design : </h1>
        <StyledDivLinks>
          <StyledLink to='/tasty-bites' relative='path'>
            Tasty Bites
          </StyledLink>
          <StyledLink to='/tea-place' relative='path'>
            Tea Place
          </StyledLink>
          <StyledLink to='/gradient' relative='path'>
            Gradient
          </StyledLink>
          <StyledLink to='/forms' relative='path'>
            Forms
          </StyledLink>
          <StyledLink to='/ui-animation' relative='path'>
            UI Animation
          </StyledLink>
        </StyledDivLinks>
      </StyledContainer>
    </>
  )
}

export default App
