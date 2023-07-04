import React from 'react';
import "./app.css";
import {Header , Footer, Aboutgp3,Blog,Possibility} from './containers';
import { Brand, CTA, Navbar } from "./components";
const App = () => {
  return (
    
    <div className="App">
      <div className="grandient__bg">
      <Navbar />
           <Header />
           </div>
           <Brand />
           <Aboutgp3 />
           
           <Possibility />
           <CTA />
           <Blog />
           <Footer />

    </div>
  );
};

export default App;
