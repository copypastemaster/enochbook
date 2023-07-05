import React from 'react';
import {
  AiFillHome,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { BiUser, BiLogoReact, BiLogoVuejs } from 'react-icons/bi';
import { SiSvelte } from 'react-icons/si';
import {
  DiCodeigniter,
  DiJsBadge,
  DiAngularSimple,
  DiBootstrap,
  DiCss3,
  DiDatabase,
} from 'react-icons/di';

function Sidebar(props) {
  return (
    <div className="flex-column max-w-xs space-y-4 mx-1 my-3 bg-slate-100 rounded-xl p-5 max-h-screen">
      <Content icon={<AiFillHome size={18} />} text={'Home'} />
      <Content icon={<BiUser size={18} />} text={'Enoch Binas'} />
      <hr />
      <Content icon={<DiBootstrap />} text={'Bootstrap'} />
      <Content icon={<DiCss3 />} text={'Css'} />
      <Content icon={<DiDatabase />} text={'Database'} />
      <hr />
      <Content icon={<DiCodeigniter />} text={'CodeIgniter'} />
      <Content icon={<DiJsBadge />} text={'Javascript'} />
      <Content icon={<DiAngularSimple />} text={'Angular'} />
      <Content icon={<BiLogoReact />} text={'React'} />
      <Content icon={<BiLogoVuejs />} text={'Vue'} />
      <Content icon={<SiSvelte />} text={'Svelte'} />
      <br />
      <br />
      <br />
      <hr />
      <section className="flex justify-between">
        <a href="https://github.com/copypastemaster">
          <AiFillGithub size={30} />
        </a>

        <a href="https://facebook.com/Enoch.Binas">
          <AiFillFacebook size={30} />
        </a>

        <a href="https://www.instagram.com/_enoch.b/">
          <AiFillInstagram size={30} />
        </a>
      </section>
    </div>
  );
}

function Content(props) {
  return (
    <section className="flex space-x-4">
      {props.icon}
      <p className="text-sm"> {props.text}</p>
    </section>
  );
}

export default Sidebar;
