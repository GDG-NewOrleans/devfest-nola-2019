import Link from 'next/link'

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/"><a>Home</a></Link>
      </li>
      <li>
        <Link href="/#speakers"><a>Speakers</a></Link>
      </li>
      <li>
        <Link href="/#schedule"><a>Schedule</a></Link>
      </li>
      <li>
        <Link href="/#sponsors"><a>Sponsors</a></Link>
      </li>
      <li>
        <Link href="/venue"><a>Venue</a></Link>
      </li>
      <li>
        <Link href="/conduct"><a>Code of Conduct</a></Link>
      </li>
      <li>
        <a href="#">Register now</a>
      </li>
    </ul>
  </nav>
)

export default Navbar
