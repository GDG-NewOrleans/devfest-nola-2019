import styled from 'styled-components'

const StyledButton = styled.a`
  background-color: red;
  color: white;
  padding: 0.5em;
  text-decoration: none;
  &:hover {
    background-color: pink;
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
