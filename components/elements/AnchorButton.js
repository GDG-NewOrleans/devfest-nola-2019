import styled, { css } from 'styled-components'
import theme from '../theme'

const smallStyles = `
  font-size: 0.75em;
`

const StyledButton = styled.a`
  background-color: ${theme.colors.blue};
  color: white;
  padding: 0.5em 1em;
  text-decoration: none;
  &:hover {
    background-color: ${theme.colors.blueLight};
  }
  ${props => {
    if (props.small) {
      return css`${smallStyles}`
    }
  }}
`
const AnchorButton = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

export default AnchorButton
