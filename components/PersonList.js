import PersonCard from "./PersonCard";

const PersonList = ({people}) => {
  const cards = people.map(person => (
    <PersonCard {...person} key={person.id} />
  ))

  return (
    <div>
      {cards}
    </div>
  )
}

export default PersonList
