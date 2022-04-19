import './App.css';
import React from 'react';
import Header from './components/Header';
import 'bulma/css/bulma.min.css';
import Section from './components/Section'
import Footer from './components/Footer';
import YoutubeEmbed from './components/Youtube';


function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <YoutubeEmbed embedId="rokGy0huYEA" />
      <Footer/>
    </div>
  );
}

export default App;
