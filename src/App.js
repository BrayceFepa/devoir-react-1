import React from 'react';
import UseState from './components/Devoirs/UseState';
import Footer from './components/Footer';
import Header from './components/Header';
import SpeakersUiList from './components/SpeakersUiList';



function App() { 
  
  return (
    <div>
      <Header/>
      <SpeakersUiList />
      <Footer />

      {/* décommenter UseState pour voir mon travail */}
      {/* <UseState/> */}
    
    </div>
  );
}
 
export default App;
