import styled from 'styled-components'
import theme from './theme'
import Link from 'next/link'
import GDGLogo from './icons/gdg_logo.svg'
import AnchorButton from './elements/AnchorButton'
import MobileMenu from './MobileNav'

export const NAV_BREAKPOINT = '800px'

const StyledLink = styled.a`
  color: ${theme.colors.blue};
  font-weight: 700;
  padding: 1em;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.blueLight};
  }
`

const Nav = styled.nav`
  background: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`

const NavDesktopContainer = styled.div`
  display: none;
  @media (min-width: ${NAV_BREAKPOINT}) {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 980px;
    padding: 15px;
  }
`

const NavLinks = styled.div`
  margin-top: 9px;
`

const StaticLogo = () => (
  <Link href="/">
    <a>
      <GDGLogo alt="GDG" width="70px" height="35px" />
    </a>
  </Link>
)

export const Navbar = () => {
  return (
    <Nav>
      <NavDesktopContainer>
        <StaticLogo />
        <NavLinks>
          <Link passHref href="/"><StyledLink>Home</StyledLink></Link>
          <Link passHref href="/#speakers"><StyledLink>Speakers</StyledLink></Link>
          <Link passHref href="/#sponsors"><StyledLink>Sponsors</StyledLink></Link>
          <Link passHref href="/venue"><StyledLink>Venue</StyledLink></Link>
          <Link passHref href="/conduct"><StyledLink>Code of Conduct</StyledLink></Link>
          <AnchorButton href="#" medium="true">Register now</AnchorButton>
        </NavLinks>
      </NavDesktopContainer>
      <MobileMenu />
    </Nav>
  )
}
