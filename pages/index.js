import styled from 'styled-components'
import Layout from "../components/Layout";
import PersonList from "../components/PersonList";
import AnchorButton from "../components/elements/AnchorButton";
import SponsorList from "../components/SponsorList";
import GDGLogo from '../components/icons/gdg_logo.svg'
const organizers = require('../data/organizers.yml.json')
const sponsors = require('../data/sponsors.yml.json')

const Title = styled.h1`
  font-family: 'Product Sans', sans-serif;
  font-size: 3em;
`

const Section = styled.section`
  padding: 4em 0;
`

export default () => (
  <Layout>
    <GDGLogo alt="GDG" width="300px" />
    <Title>DevFest New Orleans 2019</Title>
    <h2>October 5, 2019</h2>
    <p>DevFest New Orleans is a single-day, single-track, inclusive conference for all developers. GDG New Orleans and Women Techmakers New Orleans invite you to join us on Saturday, October 5, 2019 at Loyola University in New Orleans for our first annual DevFest!</p>
    <AnchorButton href="#">Register now</AnchorButton>

    <Section>
      <h1 id="speakers">Speakers &amp; Talks</h1>
      <p>We are looking for speakers to deliver innovative talks in web, mobile, UI/UX, cloud, emerging technologies and more. Got a talk idea? We want to hear from you!</p>
      <p>The CFP closes on June 30, 2019.</p>
      <AnchorButton href="https://www.papercall.io/devfest-neworleans">Submit your talk</AnchorButton>
    </Section>

    <Section>
      <h1 id="sponsors">Sponsors</h1>
      <SponsorList sponsors={sponsors} />
    </Section>

    <Section>
      <h1 id="organizers">Organizers</h1>
      <PersonList people={organizers} />
    </Section >
  </Layout>
)
