import VenueMap from "../components/VenueMap";
import Layout from "../components/Layout";
import PageTitle from "../components/elements/PageTitle";
import Section from "../components/elements/Section";
import Footer from "../components/Footer"

export default () => (
  <Layout>
    <Section>
      <PageTitle>Venue</PageTitle>
      <p>Miller Hall is at Loyola University at the corner of Calhoun and Loyola. We will be in room 114 - go past the main entrance to a separate entrance with a smaller foyer.</p>
      <h2>Travel &amp; Parking</h2>
      <p>Your best option for travel is by the St Charles streetcar route. The venue is only two blocks off of St. Charles Avenue.</p>
      <p>If you drive, you can find street parking on St. Charles Avenue and some of the neighborhood streets. Please note that many of the neighborhood streets restrict parking to less than 2 hours. Please obey all parking regulations.</p>
      <VenueMap />
    </Section>

    <Footer />
  </Layout>
)
