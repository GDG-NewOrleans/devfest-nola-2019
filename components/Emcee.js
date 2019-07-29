import styled from 'styled-components'
import ProfileImage from './elements/ProfileImage';
import { GithubLink, TwitterLink, LinkedInLink, WebsiteLink, BlogLink } from "./SocialLink";
import theme from './theme'

const StyledDiv = styled.div`
  text-align: center;

  h2 {
    font-size: 1.6em;
    margin-bottom: 0;
  }
  h3 { font-size: 1.4em; }
  img {border: 8px solid ${theme.colors.blue};}
  a { color: ${theme.colors.blue}; }
  a:hover { color: ${theme.colors.blueLight}; }
  svg { fill: ${theme.colors.blue}; }
  svg:hover { fill: ${theme.colors.blueLight}; }
`

const Emcee = ({name, company, bio, image, github, twitter, linkedin, website, blog}) => (
  <StyledDiv>
    <ProfileImage src={image} alt={name} />
    <h2>{name}</h2>
    <h3>{company}</h3>
    <p dangerouslySetInnerHTML={{ __html: bio }}></p>
    <p>
      {github ? <GithubLink username={github} /> : null}
      {twitter ? <TwitterLink username={twitter} /> : null}
      {linkedin ? <LinkedInLink link={linkedin} /> : null}
      {website ? <WebsiteLink link={website} /> : null}
      {blog ? <BlogLink link={blog} /> : null}
    </p>
  </StyledDiv>
)

export default Emcee
