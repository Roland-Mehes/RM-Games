import React from 'react';
import './Benefits.css';
import { Ctx } from '../../context/LanguageContext';

const Benefits = () => {
  const { languageData } = Ctx();
  const { benefitsHeader, benefitsContent } = languageData;

  return (
    <section className="benefits">
      <h2>{benefitsHeader}</h2>
      <ul>
        {benefitsContent?.map((content, idx) => (
          <li key={idx}>{content}</li>
        ))}
        {/* <li>Fejleszti a logikai gondolkodást</li>
        <li>Kihívások minden nap</li>
        <li>Kiváló a szórakozásra és az agytornáztatásra</li> */}
      </ul>
    </section>
  );
};

export default Benefits;
