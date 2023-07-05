import React from 'react';
import { BsGift } from 'react-icons/bs';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiDotsHorizontal } from 'react-icons/bi';
import { people } from './stories';

function Friends(props) {
  return (
    <div className="rounded-md bg-slate-100 p-3 space-y-4">
      <section>
        <h1 className="my-2">Birthdays</h1>
        <div className="flex space-x-3">
          <BsGift size={15} />
          <p className="text-sm">Carla has birthday today.</p>
        </div>
      </section>
      <section>
        <div className="flex justify-between">
          <h1>Contacts</h1>
          <div className="flex gap-2">
            <HiOutlineVideoCamera size={18} />
            <AiOutlineSearch size={18} />
            <BiDotsHorizontal size={20} />
          </div>
        </div>
      </section>
      <section className="flex-column space-y-3">
        <OnlineFriends />
      </section>
    </div>
  );
}

function OnlineFriends(props) {
  return (
    <>
      {people.map((persons) => {
        return (
          <div
            className="flex gap-3 space-x-5 space-y-1 hover:bg-slate-400 rounded-xl p-2"
            key={persons.id}
          >
            <img
              src={persons.img}
              className="w-100 max-w-sm height-100 max-h-7 rounded-md"
            />
            <p className="text-xs">{persons.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default Friends;
