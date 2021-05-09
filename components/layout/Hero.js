import Image  from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-main hero-wrapper">
          <Image className="hero-main-item" src='/hero-main.jpg' fluid />
          <a href='/posts'><Button>Posts</Button></a>
          <h2 className="h4"><span>Find out what we're up to...</span></h2>
      </div>
      <div className="hero-aside">
        <div className='hero-wrapper'>
          <Image className="hero-aside-item" src='/hero-aside-1.jpeg' fluid />
          <a href='/people'><Button>People</Button></a>
        </div>
        <div className='hero-wrapper'>
          <Image className="hero-aside-item" src='/hero-aside-2.jpg' fluid />
          <a href='/films'><Button>Films</Button></a>        
        </div>
        <div className='hero-wrapper'>
          <Image className="hero-aside-item" src='/hero-aside-3.jpg' fluid />
          <a href='/contact'><Button>Email</Button></a>   
        </div>
      </div>
    </div>
  )
}