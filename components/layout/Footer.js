import FooterNavbar from './FooterNavbar'
import SocialIcons from '../SocialIcons'

export default function Footer () {
  return (
    <footer className='app-footer'>
      <header>
        <FooterNavbar />
        <div className='footer-social-icons'>
          <SocialIcons />
        </div>
      </header>
      <p>&copy; {new Date().getFullYear()} Jemsea Films Limited, All rights reserved.</p>
    </footer>
  )
}