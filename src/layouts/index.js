import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import './tachyons.min.css'
import logo from '../images/serverless_logo.png'
import bg from '../images/bg/12.jpg'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <div
      className='fixed w-100 vh-100 cover top-0'
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
    </div>

    <div className='w-100 vh-100'>
      <div className='relative w-100 center'>
        <div className='mt2 mt4-ns mh0 ml4-ns pa2 pa0-ns mw6-ns bg-near-white'>
          <img
            className='pa0 pa3-ns'
            src={logo}
            alt='ServerlessDays Dublin 2018 logo'
          >
          </img>
          <div className='tl f4 fw8 code pl3 pb1'>
            <p className='pa0'>9 Nov, Dublin, Ireland</p>
          </div>
          <div className='tl f6 fw4 code pl4 pb4'>
            <p className='ma0'>2018/09/10 - Call for Papers opens</p>
            <p className='mb0 mt1'>2018/10/01 - Tickets go on sale</p>
            <p className='mb0 mt1'>2018/10/23 - CFP closes</p>
            <p className='mb0 mt1'>2018/10/26 - Final speaker announcement</p>
            <p className='mb0 mt1'>2018/11/09 - ServerlessDays Dublin</p>
          </div>
        </div>
      </div>
      <div className='relative absolute-ns bottom--2-ns w-100 vh-40-ns bg-black-80 avenir pv3 pt0-ns mt3 mt0-ns'>
        <div className='f4 f2-ns near-white avenir tc'>
          <p>Céad míle fáilte and welcome to ServerlessDays Dublin!</p>
        </div>
        <div className='f5 f2-ns near-white avenir tc'>
          <p
            className='green no-underline'
          >
            One Day. One Track. One Community.
          </p>
        </div>
        <div className='dt-ns center'>
          <div className='dt-row-ns w-100 tc'>

            <div className='dtc-ns pa2'>
              <a href='#about'>
                <button
                  id='about-button'
                  type='button'
                  className='pv2 pv3-ns w4-5 b--black bg-near-white ba br2'
                >
                  About
                </button>
              </a>
            </div>

            <div className='dtc-ns pa2'>
              <a href='#tickets'>
                <button
                  id='tickets-button'
                  type='button'
                  className='pv2 pv3-ns w4-5 b--black bg-near-white ba br2'
                >
                  Tickets
                </button>
              </a>
            </div>

            <div className='dtc-ns pa2'>
              <a href='#agenda'>
                <button
                  id='agenda-button'
                  type='button'
                  className='pv2 pv3-ns w4-5 b--black bg-near-white ba br2'
                >
                  Agenda
                </button>
              </a>
            </div>

            <div className='dtc-ns pa2'>
              <a href='#code-of-conduct'>
                <button
                  id='code-of-conduct-button'
                  type='button'
                  className='pv2 pv3-ns w4-5 b--black bg-near-white ba br2'
                >
                  Code of Conduct
                </button>
              </a>
            </div>

            <div className='dtc-ns pa2'>
              <a href='#sponsors'>
                <button
                  id='sponsors-button'
                  type='button'
                  className='pv2 pv3-ns w4-5 b--black bg-near-white ba br2'
                >
                  Sponsors
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div
      id='about'
      className='relative w-100 bg-black-80 pt2 pt0-ns mt0'
    >
      <div className='mw6 mw7-ns center avenir near-white pt3 pt4-ns ph2 pb2'>
        <h2 className='f3 f2-ns tl'>
          About
        </h2>
        <div className='f5 f5-ns mt4 lh-copy'>
          <p><a href="https://serverlessdays.io/" className="link dim blue">ServerlessDays</a> are a family of events around the world focused on fostering a community around serverless technologies.</p>
          <p>ServerlessDays Dublin is a community based conference in Dublin focusing on Serverless based platforms and technologies.</p>
        </div>
      </div>
    </div>

    <div
      id='tickets'
      className='relative w-100 bg-black-80 pt2 pt0-ns mt0'
    >
      <div className='mw6 mw7-ns center avenir near-white pt3 pt4-ns ph2 pb2'>
        <h2 className='f3 f2-ns tl'>
          Tickets
        </h2>
        <div className='f5 f5-ns mt4 lh-copy'>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>

    <div
      id='agenda'
      className='relative w-100 bg-black-80 pt2 pt0-ns mt0'
    >
      <div className='mw6 mw7-ns center avenir near-white pt3 pt4-ns ph2 pb2'>
        <h2 className='f3 f2-ns tl'>
          Agenda
        </h2>
        <div className='f5 f5-ns mt4 lh-copy'>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>

    <div
      id='code-of-conduct'
      className='relative w-100 bg-black-80 pt2 pt0-ns mt0'
    >
      <div className='mw6 mw7-ns center avenir near-white pt3 pt4-ns ph2 pb2'>
        <h2 className='f3 f2-ns tl'>
          Code of Conduct
        </h2>
        <div className="f5 f5-ns mt4 lh-copy">
            <p>All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We are expecting cooperation from all participants to help ensuring a safe environment for everybody.</p>
            <p className="fw6">The Quick Version</p>
            <p>Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, or religion (or lack thereof). We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.</p>
            <p className="fw6">The Less Quick Version</p>
            <p>Harassment includes offensive verbal comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>
            <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
            <p>Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.</p>
            <p>If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.</p>
            <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they will be wearing branded t-shirts.</p>
            <p>Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</p>
            <p>We expect participants to follow these rules at conference and workshop venues and conference-related social events.</p>
          </div>
      </div>
    </div>

    <div
      id='sponsors'
      className='relative w-100 bg-black-80 pt2 pt0-ns mt0'
    >
      <div className='mw6 mw7-ns center avenir near-white pt3 pt4-ns ph2 pb2'>
        <h2 className='f3 f2-ns tl'>
          Sponsors
        </h2>
        <div className='f5 f5-ns mt4 lh-copy'>
          <p>We are still looking for sponsors.</p>
        </div>
      </div>
    </div>

    <footer id="foot" className="relative w-100 bg-black-80">
      <div className="tc avenir pt2 f5">
        <span className="pa1 pa3-ns near-white">
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="100 -30 350 400" height="20" width="20" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path></svg>
          <a className="green no-underline" href="mailto:dublin@serverlessdays.io" title="Email us at dublin@serverlessdays.io">dublin@serverlessdays.io</a>
        </span>
        <p></p>
        <span className="pa1 pa3-ns near-white">
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 16 16" height="15" width="15" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"></path></svg>
          <a className="green no-underline" href="https://twitter.com/ServerlessDUB" title="Talk to us at @ServerlessDUB">&nbsp;@ServerlessDUB</a>
        </span>
      </div>

      <div className="mt4 w-100 ph4 pb3 tc">
        <img className="ph3 ma0" src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_90,f_auto,q_auto/v1518368936/octo_mascot_usu91v.png" alt="octo mascot"/>
        <img className="ph3 ma0" src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_80,f_auto,q_auto/v1518368936/unicorn_mascot_1_vyq3zb.png" alt="unicorn mascot"/>
        <img className="ph3 ma0" src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_100,f_auto,q_auto/v1518368936/Moth_mascot_jeph83.png" alt="moth mascot"/>
        <img className="ph3 ma0" src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_100,f_auto,q_auto/v1518368935/owl_mascot_tfpz2j.png" alt="owl mascot"/>
        <img className="ph3 ma0" src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_70,f_auto,q_auto/v1518368936/Dino_mascot_1_ycezll.png" alt="dino mascot"/>
        <img className="ph3 ma0" src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_90,f_auto,q_auto/v1518368935/Anteater_png_3_hy7l5s.png" alt="anteater mascot"/>
        <img className="ph3 ma0" src="https://res.cloudinary.com/senzo/image/upload/c_scale,w_60,f_auto,q_auto/v1486988424/SERVERLESS_NO_BACKGROUND_opzcgz.png" alt="jeff mascot"/>
      </div>
      <div className="w-100 center pv1">
        <p className="f6 white-20 tc">No servers were harmed during the making of this site! Background photo by Miguel Mendez on <a href='https://www.flickr.com/photos/flynn_nrg/8242512118/' className="link dim blue">Flickr</a>.</p>
      </div>
    </footer>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
