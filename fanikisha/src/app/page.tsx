
import React from 'react';
import Footer from './Footer';
import Product from "./Product"
import About from "./About";
import Team from "./Team";

import Navbar from './Navbar';
import Homepage from './Homepage';


export default function Home(){
  return(
    <main>
      <Navbar/>
      <Homepage/>
      <About/>
    <Product/>
    <Team/>
    <Footer/> 

    </main>
  )
}
