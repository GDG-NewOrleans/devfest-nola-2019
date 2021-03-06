import styled from 'styled-components'
import Layout from "../components/Layout";
import PersonList from "../components/Person/PersonList";
import AnchorButton from "../components/elements/AnchorButton";
import OffsetHeading from "../components/elements/OffsetHeading";
import Section from "../components/elements/Section";
import SponsorList from "../components/SponsorList";
import GDGLogo from '../components/icons/gdg_logo.svg'
import Footer from '../components/Footer';
import Anchor from '../components/elements/Anchor';
import Schedule from '../components/Schedule';
import Emcee from '../components/Emcee';
import Tito from '../components/Tito';
const speakers = require('../data/speakers.yml.json')
const emcee = require('../data/mc.yml.json')[0]
const schedule = require('../data/schedule.yml.json')
const sponsors = require('../data/sponsors.yml.json')
const organizers = require('../data/organizers.yml.json')

const Title = styled.h1`
  font-family: 'Product Sans', sans-serif;
  margin-left: 20px;
  text-align: center;
  &#title {
    font-size: 3em;
  }
`

export default () => (
  <Layout>
    <Section skyline>
      <Title id="title"><GDGLogo alt="GDG" width="120px" style={{ position: 'relative', top: '11px' }} /> DevFest New Orleans 2019</Title>
    </Section>

    <Section color="green">
      <h1>October 5, 2019</h1>
      <p>DevFest New Orleans is a single-day, single-track, inclusive conference for all developers. <Anchor href="https://www.gdgneworleans.com/" target="_blank" rel="noopener noreferrer" color="white">GDG New Orleans and Women Techmakers New Orleans</Anchor> invite you to join us on Saturday, October 5, 2019 at Loyola University in New Orleans for our first annual DevFest!</p>
      <p><strong>Please note that this event is now SOLD OUT, and tickets will NOT be available at the door.</strong> Check us out next year!</p>
      {/* <p>We are pleased to offer a limited number of scholarships to potential attendees who would experience financial hardship. <Anchor href="https://forms.gle/GNihqAGiK8aWgMZb7" target="_blank" rel="noopener noreferrer" color="white">Apply here</Anchor>.</p> */}
      <Tito />
      {/* <p className="cta">
        <AnchorButton color='white/green' href="https://ti.to/gdg-new-orleans/devfest-new-orleans-2019" target="_blank" rel="noopener noreferrer">Register now</AnchorButton>
      </p> */}
    </Section>

    <Section>
      <OffsetHeading id="speakers">Speakers</OffsetHeading>
      <PersonList people={speakers} rainbow />
    </Section>

    <Section>
      <OffsetHeading id="emcee">Master of Ceremonies</OffsetHeading>
      <Emcee {...emcee} />
    </Section >

    <Section color="blue">
      <OffsetHeading id="schedule">Schedule</OffsetHeading>
      <Schedule schedule={schedule} />
    </Section >

    <Section>
      <OffsetHeading id="sponsors">Sponsors</OffsetHeading>
      <SponsorList sponsors={sponsors} />
      <p>Sponsorship offers marketing exposure, hiring help, and adoration from our community, and can be in-kind (space, drinks, volunteers, swag, etc.) or monetary. Interested in becoming a sponsor? Contact us today:</p>
      <p className="cta">
        <AnchorButton href="mailto:gdgneworleans@gmail.com" target="_blank" rel="noopener noreferrer">Become a sponsor</AnchorButton>
      </p>
    </Section>

    <Section color='red'>
      <OffsetHeading id="organizers">Organizers</OffsetHeading>
      <PersonList people={organizers} />
    </Section >

    <Footer />
  </Layout>
)
