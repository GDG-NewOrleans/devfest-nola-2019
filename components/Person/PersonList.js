import styled, {css} from 'styled-components'
import PersonCard from "./PersonCard";
import theme from '../theme'

const StyledCardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img { border: 8px solid white; }
  svg { fill: white; }
  svg:hover { fill: ${theme.colors.lightGrey}; }

  ${props => props.rainbow && css`
    .card:nth-child(4n+1) svg { fill: ${theme.colors.red};}
    .card:nth-child(4n+1) svg:hover { fill: ${theme.colors.redLight}; }
    .card:nth-child(4n+1) img { border: 8px solid ${theme.colors.red}; }
    .card:nth-child(4n+2) svg { fill: ${theme.colors.yellow}; }
    .card:nth-child(4n+2) svg:hover { fill: ${theme.colors.yellowLight}; }
    .card:nth-child(4n+2) img { border: 8px solid ${theme.colors.yellow}; }
    .card:nth-child(4n+3) svg { fill: ${theme.colors.green}; }
    .card:nth-child(4n+3) svg:hover { fill: ${theme.colors.greenLight}; }
    .card:nth-child(4n+3) img { border: 8px solid ${theme.colors.green}; }
    .card:nth-child(4n+4) svg { fill: ${theme.colors.blue}; }
    .card:nth-child(4n+4) svg:hover { fill: ${theme.colors.blueLight}; }
    .card:nth-child(4n+4) img { border: 8px solid ${theme.colors.blue}; }
  `}
`

const PersonList = ({people, rainbow}) => {
  const cards = people.map(person => (
    <PersonCard {...person} key={person.id} />
  ))

  return (
    <StyledCardDeck rainbow={rainbow}>
      {cards}
    </StyledCardDeck>
  )
}

export default PersonList
