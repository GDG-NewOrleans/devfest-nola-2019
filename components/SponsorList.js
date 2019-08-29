import {Fragment} from 'react'
import Sponsor from "./Sponsor";
import styled from 'styled-components'

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Heading = styled.h2`
  text-align: center;
`

const getSponsorList = (sponsors) => (
  sponsors.map(sponsor => (
    <Sponsor {...sponsor} key={sponsor.id} />
  ))
)

const SponsorList = ({ sponsors }) => (
  <Fragment>
    <Heading>Platinum</Heading>
    <List>
      {getSponsorList(sponsors.platinum)}
    </List>
    <Heading>Gold</Heading>
    <List>
      {getSponsorList(sponsors.gold)}
    </List>
    <Heading>Silver</Heading>
    <List>
      {getSponsorList(sponsors.silver)}
    </List>
    <Heading>Bronze</Heading>
    <List>
      {getSponsorList(sponsors.bronze)}
    </List>
  </Fragment>
)

export default SponsorList
