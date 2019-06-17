const Sponsor = ({name, link, logo}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img src={logo} alt={name} />
  </a>
)

export default Sponsor
