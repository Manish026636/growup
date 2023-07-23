import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import StudentCom from './Components/StudentCom';
import YtVideo from './Components/YtVideo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <StudentCom/>
      <YtVideo/>
    </div>
  );
}

export default App;
