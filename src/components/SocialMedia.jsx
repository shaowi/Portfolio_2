import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiCodewars } from 'react-icons/si';

const LINKEDIN_URL = 'https://www.linkedin.com/in/lee-shao-wee-18a381169/ ';
const GITHUB_URL = 'https://github.com/shaowi';
const CW_URL = 'https://www.codewars.com/users/shao4321';
const urlToIconList = [
  {
    url: LINKEDIN_URL,
    icon: <AiFillLinkedin />,
  },
  {
    url: GITHUB_URL,
    icon: <AiFillGithub />,
  },
  {
    url: CW_URL,
    icon: <SiCodewars />,
  },
];

const SocialMedia = () => (
  <div className="app__social">
    {urlToIconList.map(({ url, icon }) => (
      <a href={url} target="_blank" rel="noreferrer">
        <div>{icon}</div>
      </a>
    ))}
  </div>
);

export default SocialMedia;
