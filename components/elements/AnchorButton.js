import styled from 'styled-components'
import theme from '../theme'

const StyledButton = styled.a`
  background-color: ${theme.colors.blue};
  color: white;
  padding: 0.5em 1em;
  text-decoration: none;
  &:hover {
    background-color: ${theme.colors.blueLight};
  }
`
const AnchorButton = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

export default AnchorButton
