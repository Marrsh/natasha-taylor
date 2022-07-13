// import logo from './logo.svg';
import './App.css';
import Profile from './Components/profile';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Socials from './Components/Socials.js';
// const socialLinks = [
//   {link: 'https://www.facebook.com/TrainWithTash121/', icon: (faFacebook) },
//   {link: 'https://www.instagram.com/itstashhaa/', icon: faInstagram},
//   {link: 'https://www.youtube.com/itstashhaa', icon: faYoutube},
//   {link: 'https://www.tiktok.com/@itstashhaa', icon: faTiktok}
// ]

function App() {
  return(
    <div>

  <Profile/>

 <Socials  /> 
    </div>
 
  );
}

export default App;
