import './App.css';
import Company from './components/Layouts/Company/Index';
import Hero from './components/Layouts/Hero/Index';
import AllInOne from './components/Layouts/All-in-one/Index';
import About from './components/Layouts/About/Index';
import ContainerInfo from './components/Layouts/ContainerInfo/Index';
import News from './components/Layouts/News/Index';
import Footer from './components/Layouts/Footer/Index';



function App() {
  return (
    <div className=" w-full h-[2000px]">
      <Hero />
      <Company />
      <AllInOne />
      <About />
      <ContainerInfo />
      <News />
      <Footer />
    </div> 
  );
}

export default App;
