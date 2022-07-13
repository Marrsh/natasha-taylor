import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"

import { Button, Container, Col, Row, Image, Stack } from 'react-bootstrap';
function socials() {
  return (
    <>
            <a href='https://www.facebook.com/TrainWithTash121/' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faFacebook} /></a> 
            <a href='https://www.instagram.com/itstashhaa/' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faInstagram} /></a>
            <a href='https://www.youtube.com/itstashhaa' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faYoutube}/></a>
            <a href='https://www.tiktok.com/@itstashhaa' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faTiktok} /></a>
    </>

  )
}

export default socials