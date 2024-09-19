
import React from 'react';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div>
    <Footer/>
    </div>
  );
};

export default Home;
import Product from "./Product"
import About from "./About"

export default function Home(){
  return(
    <main>
      <About/>
    <Product/>
    </main>
  )
}
