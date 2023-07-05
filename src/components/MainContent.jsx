import React from 'react';
import Sidebar from './Sidebar';

function MainContent(props) {
  return (
    <div className="flex space-y-3 bg-slate-200">
      <Sidebar />
      <Main />
    </div>
  );
}

function Main(props) {
  return (
    <div className="flex-1 bg-slate-500 rounded-md max-w-xl p-3 flex-col">
      <div className="bg-slate-100 p-2 rounded-md" id="top-level ">
        <section className="flex justify-evenly rounded-md p-4">
          <p>Stories</p>
          <p>Reels</p>
        </section>
        <hr />
        <section>
          <h1>hello</h1>
        </section>
      </div>
    </div>
  );
}

function StoryCards(props) {
  return <></>;
}

export default MainContent;
