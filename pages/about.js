import { Row, Col, Image } from 'react-bootstrap'
import Link from 'next/link'

import HeaderPage from '../components/layout/HeaderPage'

export default function About () {
  return (
    <Row className='app_pages_about'>
      <Col md={{ span: 10, offset: 1 }}>
        <div className='app_page_header'>
          <HeaderPage>about me</HeaderPage>
        </div>
        {/* Author introduction */}
        <Row className='app_pages_about_intro'>
          <Col xs={12} sm={12} md={6}>
            <h2>the early years</h2>
            <p>
              Tyrone spent his formative years growing up in Auckland, New Zealand. He moved to the United Kingdom 
              in the early 1990s. In London he studied filmmaking where he graduated on a <a href='https://www.bfi.org.uk/films-tv-people/4ce2b9a3dfdfd'>Panico film</a> course focusing 
              on all aspects of the film industry. Following this, he took several classes at the <a href='https://www.londonfilmacademy.com/course/filmmaking-diploma?gclid=Cj0KCQjw6575BRCQARIsAMp-ksP8zVCLtw2yyvxeYvVSG3jDCigB-a2IZgwlZfrXFW8YV5TZtsYQNBYaAnhXEALw_wcB'>London Film Academy.</a>
              In early 2004, he wrote and directed the short film “The Stalker”.<br />
              In the following years Tyrone has worked in the Computer, Publishing and the Gaming &amp; Casinos 
              industries but always had a love of the creative arts, narrative storytelling and films most of all.</p>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <Image src='/about-5.jpg' rounded fluid/>
          </Col>
        </Row>

        {/* Jemsea Films description */}
        <Row className='app_pages_about_jemsea_wrapper'>
          <Col className='app_pages_about_jemsea'>
            <p>
            At its peak, Jemsea Films Ltd was capable of producing four to five short movies
              a year. A selection of those films were put together for screening in various 
              festivals, of which the highlight was <a href='https://www.cannescourtmetrage.com/en/participer/inscrire-un-film'>Cannes</a>. 
              You can view <Link href='/films'><a>all films</a></Link> on this website. 
              We hope to show the talents of our filmmakers, most of which, are graduates from <a href='https://www.bfi.org.uk/films-tv-people/4ce2b9a3dfdfd'>Panico film courses</a>. 
              Together, we experiment on new ways to make short films. 
              This activity also has the objective to enable its participant to showcase their 
              achievements and aspire to greater roles in the industry. In collaboration with 
              like minded people, we help introduce to the world new talent with an independent spirit.
            </p>
          </Col>
        </Row>

        {/* Author career path */}
        <Row className='app_pages_about_intro'>
          <Col xs={12} sm={12} md={4}>
            <Image src='/about-3.jpg' rounded fluid/>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <h2>career path</h2>
            <p>
              The company originally just created <Link href='/films'><a>short films</a></Link> but we're now moving in to post production.
                It will continue to make short films whenever a good script is made available to the 
                filmmakers or when they themselves come up with an inspiring story.</p>
            <hr className='mt-4 mb-4'  />
            <p> 
              My attention lately is focusing on studying post production elements; Editing using 
              Avid Media Composer, DeVinci Resolve 16, Final Cut Pro X and Adobe Premiere Pro, 
              After Effects, Photoshop, Motion Graphics and Blender 3D to pursue this as a steady
                revenue and offer my services to employers</p>
            <p>
            Having moved back to New Zealand, Tyrone has in the past couple of years taken film education
              courses at Yoobee Colleges and is now pursing a career move into Post Production and Editing 
              at South Seas Film &amp; Television School.</p>
          </Col>
        </Row>

        {/* Presence at Cannes */}
        <Row>
          <Col className='app_pages_about_footer'>
            <Row className='app_pages_about_footer_main_img'>
              <Col md={{ span: 6, offset: 3 }}>
                <Image src='/about-4.jpg' roundedCircle fluid/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4}><Image src='/about-1.jpg' rounded fluid/></Col>
              <Col xs={12} sm={12} md={12} lg={4} className='text-center'>Jemsea Films has been presenting its short films at the Short Film Corner in the Cannes Film Festival since its inception. This event has provided a continuing step ahead in the evolution of this company. We participate in other major film festivals but Cannes has become our focal target to showcase our most successful short film productions.</Col>
              <Col xs={12} sm={12} md={12} lg={4} className='d-flex align-self-center'><Image src='/about-2.jpg' rounded fluid/></Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}