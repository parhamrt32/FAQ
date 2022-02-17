
import './App.css';
import IllustrationWomanMobile from './faq-accordion-card-main/images/illustration-woman-online-mobile.svg'
import MobilePattern from "./faq-accordion-card-main/images/bg-pattern-mobile.svg"
import Box from './faq-accordion-card-main/images/illustration-box-desktop.svg'
import FAQ from './Component/FAQ';
import data from './data.json';

function App() {

 
  return (
    <div className="App">
      <div className='frame'>
      <img className='illus' src={IllustrationWomanMobile} alt='IllustrationWomanMobile'/>
      <img  className='illus illus-shadow' src={MobilePattern} alt='mobile-pattern' />
      <img className='illus box' src={Box} alt='box'/>
        <FAQ data={data.faq}/> 
      </div>
    </div>
  );
}

export default App;
