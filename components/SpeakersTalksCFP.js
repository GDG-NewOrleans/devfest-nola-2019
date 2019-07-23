import Section from "./elements/Section";
import OffsetHeading from "./elements/OffsetHeading";
import AnchorButton from "./elements/AnchorButton";

// Use this component before the sponsors section when the conference is in CFP mode.

export default () => (
  <Section color="blue">
    <OffsetHeading id="speakers">Speakers &amp; Talks</OffsetHeading>
    <p>We are looking for speakers to deliver innovative talks in web, mobile, UI/UX, cloud, emerging technologies and more. Got a talk idea? We want to hear from you!</p>
    <p>The CFP closes on June 30, 2019.</p>
    <p className="cta">
      <AnchorButton color="white/blue" href="https://www.papercall.io/devfest-neworleans" target="_blank" rel="noopener noreferrer">Submit your talk</AnchorButton>
    </p>
  </Section>
)
