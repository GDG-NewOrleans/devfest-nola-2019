const Sponsor = ({name, url, logo}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={logo} alt={name} />
  </a>
)

export default Sponsor
