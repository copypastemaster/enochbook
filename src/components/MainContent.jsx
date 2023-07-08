import React from 'react';

import Sidebar from './Sidebar';

import { people } from './stories';
import Friends from './Friends';
import Posts from './Posts';

import OnYourMind from './OnYourMind';

function MainContent(props) {
  return (
    <div className="flex space-y-3 bg-slate-200 justify-between">
      <Sidebar />
      <Main />
      <Friends />
    </div>
  );
}

function Main(props) {
  return (
    <div className="flex-1 bg-slate-500 rounded-md max-w-xl p-3 flex-col space-y-3">
      <div className="bg-slate-100 p-2 rounded-md" id="top-level ">
        <section className="flex justify-evenly rounded-md p-4">
          <p>Stories</p>
          <p>Reels</p>
        </section>
        <hr />
        <section className="flex bg-slate-100 p-1">
          <StoryCards />
        </section>
      </div>
      <section className="bg-slate-100 rounded-md p-4">
        <OnYourMind />
      </section>
      <section className="flex-column space-y-3">
        <Posts />
      </section>
    </div>
  );
}

function StoryCards(props) {
  return (
    <>
      {people.map((person) => {
        return (
          <>
            <img
              src={person.img}
              className="w-100 max-w-sm max-h-32 h-100 rounded-lg"
            />
            <span className="relative right-16 top-28 text-xs text-slate-200 font-bold">
              {person.name}
            </span>
          </>
        );
      })}
    </>
  );
}

export default MainContent;
