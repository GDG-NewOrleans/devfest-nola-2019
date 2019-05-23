const PersonCard = ({name, image, bio, company, twitter, github}) => (
  <div>
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <h2>{company}</h2>
    <p>{bio}</p>
    <p>Twitter: {twitter}</p>
    <p>Github: {github}</p>
  </div>
)

export default PersonCard
