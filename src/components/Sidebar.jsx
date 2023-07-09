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
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <div className="flex-column max-w-xs space-y-4 mx-1 my-3 bg-slate-200 rounded-xl p-5 max-h-screen">
      <Link to="/enochbook">
       <Content icon={<AiFillHome size={18} />} text={'Home'} />
      </Link>
      
      <Link to="/ProfileCreator">
        <Content icon={<BiUser size={18} />} text={'Enoch Binas'} />
      </Link>
      <hr style={{ borderColor: 'black' }} />
      <Content icon={<DiBootstrap />} text={'Bootstrap'} />
      <Content icon={<DiCss3 />} text={'Css'} />
      <Content icon={<DiDatabase />} text={'Database'} />
      <hr style={{ borderColor: 'black' }} />
      <Content icon={<DiCodeigniter />} text={'CodeIgniter'} />
      <Content icon={<DiJsBadge />} text={'Javascript'} />
      <Content icon={<DiAngularSimple />} text={'Angular'} />
      <Content icon={<BiLogoReact />} text={'React'} />
      <Content icon={<BiLogoVuejs />} text={'Vue'} />
      <Content icon={<SiSvelte />} text={'Svelte'} />
      <br />
      <br />
      <br />
      <hr style={{ borderColor: 'black' }} />
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
    <section className="flex space-x-4 hover:bg-slate-500 p-2 rounded-md">
      {props.icon}
      <p className="text-sm"> {props.text}</p>
    </section>
  );
}

export default Sidebar;
