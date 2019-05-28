import Layout from "../components/Layout";
import PersonList from "../components/PersonList";
import AnchorButton from "../components/elements/AnchorButton";
const organizers = require('../data/organizers.yml.json')

export default () => (
  <Layout>
    <h1>DevFest New Orleans 2019</h1>
    <h2>October 5, 2019</h2>
    <p>DevFest New Orleans is a single-day, single-track, inclusive conference for all developers. GDG New Orleans and Women Techmakers New Orleans invite you to join us on Saturday, October 5, 2019 at Loyola University in New Orleans for our first annual DevFest!</p>
    <AnchorButton href="#">Register now</AnchorButton>


    <h2 id="speakers">Speakers &amp; Talks</h2>
    <p>We are looking for speakers to deliver innovative talks in web, mobile, UI/UX, cloud, emerging technologies and more. Got a talk idea? We want to hear from you!</p>
    <p>The CFP closes on June 30, 2019.</p>
    <AnchorButton href="https://www.papercall.io/devfest-neworleans">Submit your talk</AnchorButton>

    <h2 id="sponsors">Sponsors</h2>
    <p>RPC XML static cache cherry pick greenfield pull request distributed systems architecture antipattern. Edge scalable TL i S3 chmod. First in first out progressive web app internet button free as in beer compilation behavior-driven design programmer duck typing.</p>

    <h2 id="organizers">Organizers</h2>
    <PersonList people={organizers} />
  </Layout>
)
