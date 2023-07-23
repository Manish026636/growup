import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import StudentCom from './Components/StudentCom';
import YtVideo from './Components/YtVideo';
import Features from './Components/Features';
import StudentSocial from './Components/StudentSocial';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <StudentCom/>
      <YtVideo/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
