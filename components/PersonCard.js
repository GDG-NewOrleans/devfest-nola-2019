import styled from 'styled-components'
import { GithubLink, TwitterLink, LinkedInLink, WebsiteLink, BlogLink } from "./SocialLink";

const StyledCard = styled.div`
  padding: 16px;
  width: 300px;
  img {
    width: 250px;
  }
`

const PersonCard = ({name, image, bio, company, twitter, github, linkedin, website, blog}) => (
  <StyledCard>
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <h2>{company}</h2>
    <p>{bio}</p>
    <p>
      {github ? <GithubLink username={github} /> : null}
      {twitter ? <TwitterLink username={twitter} /> : null}
      {linkedin ? <LinkedInLink url={linkedin} /> : null}
      {website ? <WebsiteLink url={website} /> : null}
      {blog ? <BlogLink url={blog} /> : null}
    </p>
  </StyledCard>
)

export default PersonCard
