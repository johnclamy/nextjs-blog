import Card  from 'react-bootstrap/Card'

import Logo from '../Logo'
import HeaderNavbar from './HeaderNavbar'

export default function Header () {
  return (
    <header>
      <Card className='text-centered'>
        <Card.Body className='pt-0 pr-0 pb-2 pl-0'>
          <Logo />
          <HeaderNavbar />
        </Card.Body>
      </Card>
    </header>
  )
}