import React from 'react';
import Banner from '../componentes/home/Banner';
import Beneficios from '../componentes/home/Beneficios';
import Caracteristicas from '../componentes/home/Caracteristicas';
import FAQ from '../componentes/home/FAQ';
import SelectorQR from '../componentes/home/SelectorQR';


const Home = () => {
  return (
    <div>
      <Banner />
      <Caracteristicas />
      <SelectorQR />
      <Beneficios />
      <FAQ />
    </div>
  );
};

export default Home;
