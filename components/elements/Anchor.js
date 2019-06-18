import styled, { css } from 'styled-components'
import theme from '../theme'

const StyledLink = styled.a`
  ${props => props.color == 'blue' && css`
    color: ${theme.colors.blue};
    &:hover {
      color: ${theme.colors.blueLight};
    }
  `}
  ${props => props.color == 'red' && css`
    color: ${theme.colors.red};
    &:hover {
      color: ${theme.colors.redLight};
    }
  `}
  ${props => props.color == 'white' && css`
    color: white;
    &:hover {
      color: ${theme.colors.lightGrey};
    }
  `}
  /* padding: 0.5em 1em; */
  /* text-decoration: none; */
`

StyledLink.defaultProps = {
  color: 'blue',
}

const Anchor = (props) => {
  return (
    <StyledLink {...props}>
      {props.children}
    </StyledLink>
  )
}

export default Anchor
