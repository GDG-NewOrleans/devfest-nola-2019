import Sponsor from "./Sponsor";

const SponsorList = ({ sponsors }) => {
  const sponsorList = sponsors.map(sponsor => (
    <Sponsor {...sponsor} key={sponsor.id} />
  ))

  return (
    <div>
      {sponsorList}
    </div>
  )
}

export default SponsorList
