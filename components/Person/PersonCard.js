import styled from 'styled-components'
import { GithubLink, TwitterLink, LinkedInLink, WebsiteLink, BlogLink } from "../SocialLink";
import ProfileImage from '../elements/ProfileImage';

const StyledCard = styled.div`
  /* offsetting location for links */
  margin: 16px 0;
  padding: 16px;
  text-align: center;
  width: 272px;

  &.card h1 {
    font-size: 1.6em;
    margin-top: -250px;
    padding-top: 250px;
    margin-bottom: 0;
  }
  &.card h2 { font-size: 1.4em; }
`

const PersonCard = ({name, image, bio, company, twitter, github, linkedin, website, blog, color, id}) => {
  // Hack to get the /static/ folder to work for gh-pages. Set to true for gh-pages build
  const ghPages = false
  const assetPrefix = ghPages ? '/devfest-nola-2019' : ''
  const img = `${assetPrefix}${image}`

  return (
    <StyledCard className="card">
      <ProfileImage src={img} alt={name} />
      <h1 id={id}>{name}</h1>
      <h2>{company}</h2>
      <p>{bio}</p>
      <p>
        {github ? <GithubLink username={github} color={color} /> : null}
        {twitter ? <TwitterLink username={twitter} color={color} /> : null}
        {linkedin ? <LinkedInLink link={linkedin} color={color} /> : null}
        {website ? <WebsiteLink link={website} color={color} /> : null}
        {blog ? <BlogLink link={blog} color={color} /> : null}
      </p>
    </StyledCard>
  )
}

export default PersonCard
