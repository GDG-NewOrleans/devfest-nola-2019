import styled from 'styled-components'
import Link from 'next/link'
import theme from './theme';

const Article = styled.article`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;
  a { color: white; }
  a:hover{ color: ${theme.colors.lightGrey}; }
`

const Time = styled.p`
  font-size: 1.1em;
  margin: 16px 0 0 0;
`

const Title = styled.h3`
  font-size: 1.3em;
  margin: 16px 0 0 0;
`

const Speaker = styled.h4`
  font-size: 1.1em;
  font-style: italic;
  font-weight: 400;
  margin: 8px 0 0 0;
`

const SpeakerLink = styled.a`
  color: white;
  text-decoration: none;
  &hover {
    color: ${theme.colors.lightGrey};
  }
`

const Event = ({ title, date, speaker, speakerId, description, htmlDescription}) => (
  <Article>
    <Time>{date}</Time>
    <div>
      <Title>{title}</Title>
      { !!speaker && <Link passHref href={`/#${speakerId}`}>
        <SpeakerLink>
          <Speaker>{speaker}</Speaker>
        </SpeakerLink>
      </Link>}
      {!!description && <p>{description}</p>}
      {!!htmlDescription && <p dangerouslySetInnerHTML={{ __html: htmlDescription }}></p> }
    </div>
  </Article>
)

const Schedule = ({schedule}) => {
  const scheduleItems = schedule.map(event => (
    <Event {...event} key={event.id} />
  ))

  return (
    <div>
      {scheduleItems}
    </div>
  )
}

export default Schedule
