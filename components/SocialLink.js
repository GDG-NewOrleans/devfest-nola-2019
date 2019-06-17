import styled from 'styled-components'
import GithubLogo from './icons/github.svg'
import TwitterLogo from './icons/twitter.svg'
import LinkedInLogo from './icons/linkedin-in.svg'
import WebsiteLogo from './icons/globe-africa.svg'
import BlogLogo from './icons/pen-nib.svg'
import theme from './theme'

const StyledLink = styled.a`
  margin-right: 12px;
  svg {
    width: 24px;
    fill: white;
  }
  svg:hover {
    fill: ${theme.colors.lightGrey};
  }
`

const SocialLink = ({href, children}) => (
  <StyledLink href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </StyledLink>
)

export const GithubLink = ({username}) => (
  <SocialLink href={`https://github.com/${username}`}>
    <GithubLogo alt="Github" />
  </SocialLink>
)

export const TwitterLink = ({ username }) => (
  <SocialLink href={`https://twitter.com/${username}`}>
    <TwitterLogo alt="Twitter" />
  </SocialLink>
)

export const LinkedInLink = ({ link }) => (
  <SocialLink href={link}>
    <LinkedInLogo alt="LinkedIn" />
  </SocialLink>
)

export const WebsiteLink = ({ link }) => (
  <SocialLink href={link}>
    <WebsiteLogo alt="personal website" />
  </SocialLink>
)

export const BlogLink = ({ link }) => (
  <SocialLink href={link}>
    <BlogLogo alt="blog" />
  </SocialLink>
)
