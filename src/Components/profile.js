import React from 'react';
import { Button, Container, Col, Row, Image, Stack } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faYoutube } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
class Profile extends React.Component {
    render(){
        return(
            <div style = {{height:"100vh"}}>
                <div className='p-5' style = {{backgroundColor: '#6247aa', width:'100%', backgroundImage: 'linear-gradient(315deg, #6247aa 0%, #a594f9 74%)'}}>
                    {/* <Image  className='shadow-lg rounded' src="https://static.wixstatic.com/media/bb4ff2_0828a2a31d89461792213354796588f2~mv2.jpg/v1/crop/x_0,y_37,w_3648,h_3936/fill/w_489,h_528,al_c,q_80,usm_0.66_1.00_0.01/IMG_1498_JPG.webp" rounded /> */}
                    <Row className="d-flex justify-content-center align-items-center text-align-center" style={{height:'100%'}} >
                        <Col md={6} className='text-center'  >
                            <Image width= '40%' className='shadow-lg mb-5 rounded' src="https://static.wixstatic.com/media/bb4ff2_0828a2a31d89461792213354796588f2~mv2.jpg/v1/crop/x_0,y_37,w_3648,h_3936/fill/w_489,h_528,al_c,q_80,usm_0.66_1.00_0.01/IMG_1498_JPG.webp" rounded />
                        </Col>
                        <Col md={6} style={{color:'white'}}>
                            <h1 className='display-1'> Natasha Taylor</h1>
                            <h4 className="pt-1" >Model | Personal Trainer | Class Instructor</h4> 
                        </Col>
                    </Row>
                </div>
                <Container style={{marginBottom:'50px'}}>
                    <Row className="d-flex justify-content-center align-items-center text-align-center mt-5" style={{height:'100%'}} >
                        <Col md={12} >
                        <h1 className='display-5 '> Portfolio </h1>
                        <hr/>
                        </Col>
                        <Col md={12} className='mb-5'> 
                        My Name is Natasha Taylor, I am new to modeling, but take it all in my stride, I love being the centre of attention, as per my job coaching large classes ie; Spin, Olympic Lifting and Disco-cise. I love to dance, train and SLEEP! I am determined and never give up on anything. Maybe you could say i work too much.... I love being busy and active!
                        </Col>
                        <Col md={3} >
                        <Image  className='shadow-lg mb-5 rounded' src="https://static.wixstatic.com/media/bb4ff2_85114432b81b44b28e4b60526c63c60b~mv2.jpg/v1/fill/w_301,h_450,al_c,q_80,usm_0.66_1.00_0.01/bb4ff2_85114432b81b44b28e4b60526c63c60b~mv2.webp" rounded />
                        </Col>
                        <Col md={3} >
                        <Image  className='shadow-lg mb-5 rounded' src="https://static.wixstatic.com/media/bb4ff2_384cfcb59cdf4752a00de576ae7119be~mv2.jpg/v1/fill/w_302,h_450,al_c,q_80,usm_0.66_1.00_0.01/bb4ff2_384cfcb59cdf4752a00de576ae7119be~mv2.webp" rounded />
                        </Col>
                        <Col md={3} >
                        <Image  className='shadow-lg mb-5 rounded' src="https://static.wixstatic.com/media/bb4ff2_74492473d5ba4a3ca9369585e912f336~mv2.jpg/v1/fill/w_301,h_450,al_c,q_80,usm_0.66_1.00_0.01/bb4ff2_74492473d5ba4a3ca9369585e912f336~mv2.webp" rounded />
                        </Col>
                        <Col md={3} >
                        <Image  className='shadow-lg mb-5 rounded' src="https://static.wixstatic.com/media/bb4ff2_cd8d3845beb8477e91be06b4c07ee5ab~mv2.jpg/v1/fill/w_302,h_450,al_c,q_80,usm_0.66_1.00_0.01/bb4ff2_cd8d3845beb8477e91be06b4c07ee5ab~mv2.webp" rounded />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center text-align-center mt-5" style={{height:'100%'}} >
                        <Col md={12} >
                        <h1 className='display-5 '> Train With Tash </h1>
                        <hr/>
                        Enter content here
                        </Col>
        
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center text-align-center mt-5" style={{height:'100%'}} >
                        <Col md={12} >
                        <h1 className='display-5 '>Work With Me  </h1>
                        <hr/>
                        Enter content here
                        </Col>
           
                    </Row>
                </Container>
                <br/>
                <div className='p-3 fixed-bottom' style = {{backgroundColor: '#6247aa', backgroundImage: 'linear-gradient(315deg, #6247aa 0%, #a594f9 74%)',width: '100%'}}>
                <Row>
                  <div className='text-center' style={{color:'white'}}>
                          <FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faFacebook} />
                          <FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faInstagram} />
                          <FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faYoutube} />
                          <FontAwesomeIcon className='mx-3' style={{fontSize:'36px'}}icon={faTiktok} />
                    </div>
                  </Row>
                </div>
            </div>
          
            
        );
    }
}

export default Profile
