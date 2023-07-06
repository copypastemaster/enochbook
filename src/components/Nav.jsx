import React from 'react';
import { RiMessengerLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiSolidUserCircle } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

function Nav(props) {
  return (
    <div className="flex justify-between space-x-40 p-3 sticky">
      <h1 className="text-3xl md:text-xl">Enochbook</h1>

      <input
        type="search"
        name="search"
        placeholder="Search Enochbook"
        className="w-100 sm:w-50 md:w-40 lg:w-80 rounded-md bg-slate-100 text-sm px-2"
      />

      <section className="flex space-x-5">
        <RiMessengerLine size={25} />
        <IoMdNotificationsOutline size={25} />
        <BiSolidUserCircle size={25} />
      </section>
    </div>
  );
}

export default Nav;
