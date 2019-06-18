import styled from 'styled-components'
import PersonCard from "./PersonCard";

const StyledCardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const PersonList = ({people}) => {
  const cards = people.map(person => (
    <PersonCard {...person} key={person.id} />
  ))

  return (
    <StyledCardDeck>
      {cards}
    </StyledCardDeck>
  )
}

export default PersonList
