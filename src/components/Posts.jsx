import React from 'react';
import { BiDotsHorizontal } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { test } from '../features/IndividualStore';
import { AiOutlineUser } from 'react-icons/ai';
import { Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { people } from './stories';

function Posts(props) {
  const individual = useSelector((state) => state.individual.value);
  const dispatch = useDispatch();

  return (
    <>
      {people.map((person) => {
        return (
          <div
            key={person.id}
            className="bg-slate-200 rounded-md p-2 space-y-2"
          >
            <div className="flex  justify-between">
              <section className="flex space-x-3">
                
                <Link to={person.link}>
                  <Avatar
                      src={person.img}
                      className="w-100 max-w-sm h-100 max-h-12 rounded-full"
                    />
                </Link>
                  
               
                <div>
                  <Link to={person.link}>
                   <h1>{person.name}</h1>
                  </Link>
                  <span className="text-xs">5 min</span>
                </div>
              </section>
              <BiDotsHorizontal />
            </div>

            <p>{person.post}</p>
            <hr style={{ borderColor: 'black' }} />
            <div className="flex justify-evenly p-1">
              <h5 className="text-sm hover:bg-slate-400">Like</h5>
              <h5 className="text-sm hover:bg-slate-400">Comment</h5>
            </div>
            <hr style={{ borderColor: 'black' }} />
            <div className="flex gap-1">
              <AiOutlineUser size={25} />
              <input
                type="text"
                placeholder="Write a comment"
                className="p-2 flex-1 rounded-3xl h-7"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Posts;
