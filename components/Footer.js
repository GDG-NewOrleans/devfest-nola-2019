import Section from "./elements/Section"
import AnchorButton from "./elements/AnchorButton"
import Lead from "./elements/Lead"
import GDGLogo from './icons/gdg_logo.svg'

export default () => (
  <Section skyline>
    <Lead>DevFest New Orleans 2019 is organized by</Lead>
    <h1 style={{ fontSize: '2.5em' }}><GDGLogo alt="GDG" width="110px" style={{ position: 'relative', top: '11px' }} /> GDG New Orleans</h1>
    <p className="cta">
      <AnchorButton href="https://ti.to/gdg-new-orleans/devfest-new-orleans-2019" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>Register now</AnchorButton>
      <AnchorButton color="red" href="https://www.meetup.com/gdg-new-orleans/" target="_blank" rel="noopener noreferrer">Join us on Meetup</AnchorButton>
    </p>
  </Section>
)
