import styled from 'styled-components'
import GithubLogo from './icons/github.svg'
import TwitterLogo from './icons/twitter.svg'
import LinkedInLogo from './icons/linkedin-in.svg'
import WebsiteLogo from './icons/globe-africa.svg'
import BlogLogo from './icons/pen-nib.svg'
import theme from './theme'

const StyledLink = styled.a`
  margin-right: 8px;
  svg {
    width: 32px;
    fill: ${theme.colors.red};
  }
  svg:hover {
    fill: ${theme.colors.redLight};
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

export const LinkedInLink = ({ url }) => (
  <SocialLink href={url}>
    <LinkedInLogo alt="LinkedIn" />
  </SocialLink>
)

export const WebsiteLink = ({ url }) => (
  <SocialLink href={url}>
    <WebsiteLogo alt="personal website" />
  </SocialLink>
)

export const BlogLink = ({ url }) => (
  <SocialLink href={url}>
    <BlogLogo alt="blog" />
  </SocialLink>
)
