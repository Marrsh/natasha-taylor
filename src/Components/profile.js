import React from 'react';
import HomeButton from './homeButton';
import './styles.css';
import ReactDOM from 'react-dom';
import { Button, Container, Col, Row, Image, Stack } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faYoutube } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
class Profile extends React.Component {
    render(){
        return(   
        
            <Stack direction='vertical'  className='p-5 backg vh-100'>
           
                    {/* <Image  className='shadow-lg rounded' src="https://static.wixstatic.com/media/bb4ff2_0828a2a31d89461792213354796588f2~mv2.jpg/v1/crop/x_0,y_37,w_3648,h_3936/fill/w_489,h_528,al_c,q_80,usm_0.66_1.00_0.01/IMG_1498_JPG.webp" rounded /> */}
                    <Row className=" justify-content-center align-items-center text-align-center" >
                        <Col md={6} className='text-center' >
                            <Image width= '50%' className='shadow-lg mb-5 rounded' src="https://static.wixstatic.com/media/bb4ff2_0828a2a31d89461792213354796588f2~mv2.jpg/v1/crop/x_0,y_37,w_3648,h_3936/fill/w_489,h_528,al_c,q_80,usm_0.66_1.00_0.01/IMG_1498_JPG.webp" rounded />
                        </Col>
                    </Row>
                
                    <Col className='text-center text-white'>
                            <h1 className='display-1 '> Natasha Taylor</h1>
                            <h4 className="pt-1" >Model | Personal Trainer | Class Instructor</h4> 
                    </Col>
                    <Row className='bg-black p-5 mb-3'>
                        
                        <HomeButton/>
                        <HomeButton/>
                        <HomeButton/>
                    </Row>
                    <Col className='text-center text-white'>
        <a href='https://www.facebook.com/TrainWithTash121/' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faFacebook} /></a>
        <a href='https://www.instagram.com/itstashhaa/' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faInstagram} /></a>
        <a href='https://www.youtube.com/itstashhaa' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faYoutube}/></a>
        <a href='https://www.tiktok.com/@itstashhaa' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faTiktok} /></a>


    </Col>

            </Stack>
          
            
        );
    }
}

export default Profile
{/* 
<Stack direction='horizontal' gap={2} className='text-white'>
    <Image width= '40%' className='shadow-lg mb-5 rounded' src="https://static.wixstatic.com/media/bb4ff2_0828a2a31d89461792213354796588f2~mv2.jpg/v1/crop/x_0,y_37,w_3648,h_3936/fill/w_489,h_528,al_c,q_80,usm_0.66_1.00_0.01/IMG_1498_JPG.webp" rounded />
    <Stack direction='vertical'>
        <h1 className='display-1'> Natasha Taylor</h1>
        <h4 className="pt-1" >Model | Personal Trainer | Class Instructor</h4> 
    </Stack>
</Stack>
    <div className='text-center text-white'>
        <a href='https://www.facebook.com/TrainWithTash121/' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faFacebook} /></a>
        <a href='https://www.instagram.com/itstashhaa/' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faInstagram} /></a>
        <a href='https://www.youtube.com/itstashhaa' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faYoutube}/></a>
        <a href='https://www.tiktok.com/@itstashhaa' target='_blank' class='link-light'><FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faTiktok} /></a>
    </div>
</Stack> */}