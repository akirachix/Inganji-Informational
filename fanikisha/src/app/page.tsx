
import React from 'react';
import Footer from './Footer';
import Product from "./Product"
import About from "./About";
import Team from "./Team";


export default function Home(){
  return(
    <main>
      <About/>
    <Product/>
    <Team/>
    <Footer/>

    </main>
  )
}
