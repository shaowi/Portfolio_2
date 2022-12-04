import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';

const LINKEDIN_URL = 'https://www.linkedin.com/in/lee-shao-wee-18a381169/ ';
const GITHUB_URL = 'https://github.com/shaowi';
const CW_URL = 'https://www.codewars.com/users/shao4321';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href={LINKEDIN_URL}
        target="_blank
        "
      >
        <AiFillLinkedin />
      </a>
    </div>
    <div>
      <a
        href={GITHUB_URL}
        target="_blank
        "
      >
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a
        href={CW_URL}
        target="_blank
        "
      >
        <SiCodewars />
      </a>
    </div>
  </div>
);

export default SocialMedia;
