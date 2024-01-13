import './test.css';
import Bg from './Bg.svg'
import Bg2 from './Bg2.svg'

function App() {
  return (
    <>
      <div className="container">
        <img src={Bg} className="bg" alt="background svg" />
        <pre className="heading heading1">KERALA{"\n"}STARTUP MISSION</pre>
        <p className="content content1">
        The Kerala Startup Mission (KSUM) is the nodal agency of the government of Kerala for promoting entrepreneurship in the state. It is also the implementing body for the Kerala Technology Startup Policy that supports the state’s startup ecosystem through various schemes and support programs. KSUM was founded in 2006, with the goal to promote technology-based entrepreneurship activities and to create the infrastructure and ecosystem required to support high-end technology-based startup businesses. 
        </p>
        
      </div>
      <div className="container">
        <img src={Bg2} className="bg" alt="background svg" />
        <pre className="heading heading2">INnOVATION AnD{"\n"}EnTREPRENEURSHIP{"\n"}DEVELOPMENT CENTRE</pre>
        <p className="content content2">
        Innovation and Entrepreneurship Development Centre (IEDC) is a flagship initiative of Kerala Startup Mission to promote innovation and entrepreneurship among the student and academic fraternity in the educational institutions in the state of Kerala and considered as an umbrella programme that would play an instrumental role in fostering innovation culture in academic institutions.
 
        </p>
      </div>
      {/* <ArcReactor/> */}
    </>
    
  );
}

export default App;