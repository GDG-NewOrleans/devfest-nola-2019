import styled from 'styled-components'

const Image = styled.img`
  width: 270px;
  margin: 8px;
`

const Sponsor = ({name, link, logo}) => {
  // Hack to get the /static/ folder to work for gh-pages. Set to true for gh-pages build
  const ghPages = false
  const assetPrefix = ghPages ? '/devfest-nola-2019' : ''
  const img = `${assetPrefix}${logo}`

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image src={img} alt={name} />
    </a>
  )
  }

export default Sponsor
