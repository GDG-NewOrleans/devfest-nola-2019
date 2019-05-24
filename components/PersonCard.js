const PersonCard = ({name, image, bio, company, twitter, github}) => (
  <div>
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <h2>{company}</h2>
    <p>{bio}</p>
    { twitter ? (<p>Twitter: {twitter}</p>) : null }
    { github ? (<p>Github: {github}</p>) : null }
    <p>Github: {github}</p>
  </div>
)

export default PersonCard
