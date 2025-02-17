import React from 'react';

const HEAD = (
  <div
    style={{
      width: '30px',
      height: '30px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '25px',
      right: '-10px',
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      width: '10px',
      height: '50px',
      background: 'black',
      position: 'absolute',
      top: '50px',
      right: '0',
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      width: '50px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '60px',
      right: '-50px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  ></div>
);

const LEFT_ARM = (
  <div
    style={{
      width: '50px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '35px',
      right: '3px',
      rotate: '30deg',
      transformOrigin: 'left bottom',
    }}
  ></div>
);

const RIGHT_LEG = (
  <div
    style={{
      width: '50px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '90px',
      right: '-40px',
      rotate: '30deg',
      transformOrigin: 'left bottom',
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    style={{
      width: '50px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '115px',
      right: '-5px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

function HangmanBodyDraw({ numberOfGuesses }) {
  return (
    <div className="hangman-body-draw">
      {BODY_PARTS.slice(0, numberOfGuesses).map((part, partIDX) => (
        <div key={partIDX}>{part}</div>
      ))}
      <div
        style={{
          height: '30px',
          width: '10px',
          background: 'black',
          marginLeft: '45px',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: '10px',
          width: '80px',
          background: 'black',
          marginLeft: '45px',
        }}
      ></div>
      <div
        style={{
          height: '150px',
          width: '10px',
          background: 'black',
          marginLeft: '45px',
        }}
      ></div>
      <div
        style={{ height: '10px', width: '100px', background: 'black' }}
      ></div>
    </div>
  );
}

export default HangmanBodyDraw;
