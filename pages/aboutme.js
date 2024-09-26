import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

export default function Aboutme() {
  return (
    <div className="view">
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <div className="view-header">{"Hey! It's me, Tati :)"}</div>
      <Image width={400} height={400} alt="picture of me :)" src="/selfie.jpg" />
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <div className="view-subheader div">{"I hope you're enjoying Ethos!"}</div>
      <div className="view-subheader div">More About Ethos</div>
      <div className="div">
        <span>
          <a href="https://github.com/tatianabarga/ethos-client" target="_blank" rel="noopener noreferrer">
            <Button className="btns-gen">Ethos GitHub front-end repository</Button>
          </a>
        </span>
        <span>
          <a href="https://github.com/tatianabarga/ethos-server" target="_blank" rel="noopener noreferrer">
            <Button className="btns-gen">Ethos GitHub back-end repository</Button>
          </a>
        </span>
      </div>
      <div className="view-subheader div">More About Me</div>
      <div className="div">
        <span>
          <a href="http://www.linkedin.com/in/tatiana-barga" target="_blank" rel="noopener noreferrer">
            <Button className="btns-gen">Check out my LinkedIn</Button>
          </a>
        </span>
        <span>
          <a href="https://github.com/tatianabarga" target="_blank" rel="noopener noreferrer">
            <Button className="btns-gen">
              Check out my GitHub
            </Button>
          </a>
        </span>
      </div>
      <div className="view-subheader div">See my other projects:</div>
      <div className="div">
        <span>
          <a href="https://ethos-client.netlify.app/" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
            <Button className="btns-gen">Ethos</Button>
          </a>
        </span>
      </div>
    </div>
  );
}