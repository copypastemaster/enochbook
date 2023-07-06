import React from 'react';
import { CiUser } from 'react-icons/ci';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { GrGallery } from 'react-icons/gr';
import { MdInsertEmoticon } from 'react-icons/md';

function OnYourMind(props) {
  return (
    <div>
      <div className="flex gap-2">
        <CiUser className="bg-slate-300 rounded-full" size={30} />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 rounded-full p-1 outline-none w-100"
        />
      </div>
      <hr style={{ borderColor: 'black' }} />
      <br />
      <div className="flex justify-evenly">
        <navs className="flex space-x-2 hover:bg-slate-300 p-3 rounded-xl">
          <BsFillCameraVideoFill />
          <p>Live video</p>
        </navs>
        <navs className="flex space-x-2 hover:bg-slate-300 p-3 rounded-xl">
          <GrGallery />
          <p>Live video</p>
        </navs>
        <navs className="flex space-x-2 hover:bg-slate-300 p-3 rounded-xl">
          <MdInsertEmoticon />
          <p>Live video</p>
        </navs>
      </div>
    </div>
  );
}

export default OnYourMind;
