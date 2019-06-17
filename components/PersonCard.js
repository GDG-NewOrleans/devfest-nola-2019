import styled from 'styled-components'
import { GithubLink, TwitterLink, LinkedInLink, WebsiteLink, BlogLink } from "./SocialLink";

const StyledCard = styled.div`
  padding: 16px;
  width: 272px;

  &.card h1 {
    font-size: 1.6em;
    margin-bottom: 0;
  }
  &.card h2 { font-size: 1.4em; }
`

const StyledImg = styled.img`
  border-radius: 50%;
  border: 4px solid white;
  width: 250px;
`

const PersonCard = ({name, image, bio, company, twitter, github, linkedin, website, blog}) => (
  <StyledCard className="card">
    <StyledImg src={image} alt={name} />
    <h1>{name}</h1>
    <h2>{company}</h2>
    <p>{bio}</p>
    <p>
      {github ? <GithubLink username={github} /> : null}
      {twitter ? <TwitterLink username={twitter} /> : null}
      {linkedin ? <LinkedInLink link={linkedin} /> : null}
      {website ? <WebsiteLink link={website} /> : null}
      {blog ? <BlogLink link={blog} /> : null}
    </p>
  </StyledCard>
)

export default PersonCard
