import React from 'react';
import './Hero.css';
import { Ctx } from '../../context/LanguageContext';

const Hero = () => {
  const { languageData } = Ctx();
  const { heroTextHeader, heroTextParagraph } = languageData;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{heroTextHeader}</h1>
        <p>{heroTextParagraph}</p>
      </div>
    </section>
  );
};

export default Hero;
