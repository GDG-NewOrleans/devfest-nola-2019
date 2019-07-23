import Sponsor from "./Sponsor";
import styled from 'styled-components'

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const SponsorList = ({ sponsors }) => {
  const sponsorList = sponsors.map(sponsor => (
    <Sponsor {...sponsor} key={sponsor.id} />
  ))

  return (
    <List>
      {sponsorList}
    </List>
  )
}

export default SponsorList
