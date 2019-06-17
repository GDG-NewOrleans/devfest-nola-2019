import styled, { css } from 'styled-components'
import theme from '../theme'

const smallStyles = `
  font-size: 0.75em;
`

const StyledButton = styled.a`
  ${props => props.color == 'blue' && css`
    background-color: ${theme.colors.blue};
    color: white;
    &:hover {
      background-color: ${theme.colors.blueLight};
    }
  `}
  ${props => props.color == 'red' && css`
    background-color: ${theme.colors.red};
    color: white;
    &:hover {
      background-color: ${theme.colors.redLight};
    }
  `}
  ${props => props.color == 'white/green' && css`
    background-color: white;
    color: ${theme.colors.green};
    &:hover {
      background-color: ${theme.colors.lightGrey};
    }
  `}
  ${props => props.color == 'white/blue' && css`
    background-color: white;
    color: ${theme.colors.blue};
    &:hover {
      background-color: ${theme.colors.lightGrey};
    }
  `}
  padding: 0.5em 1em;
  text-decoration: none;
  ${props => {
    if (props.small) {
      return css`${smallStyles}`
    }
  }}
`

StyledButton.defaultProps = {
  color: 'blue',
}

const AnchorButton = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

export default AnchorButton
