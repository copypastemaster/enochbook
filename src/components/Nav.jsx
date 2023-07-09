import React from 'react';
import { RiMessengerLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiSolidUserCircle } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { people } from './stories';
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom';

function Nav(props) {
  const [selectedPerson, setSelectedPerson] = React.useState('')
  const test = (e) => setSelectedPerson(e);

  return (
    <div className="flex justify-between space-x-40 p-3 sticky">
      <Link to="/enochbook"><h1 className="text-3xl md:text-xl">Enochbook</h1></Link>
      
      <Dropdown.Root>

        <Dropdown.DropdownMenuTrigger>
          <input
            type="text" 
            name="search"
            placeholder="Search Enochbook"
            className="w-100 sm:w-100 md:w-40 lg:w-80 rounded-md bg-slate-100 text-sm p-2"
            aria-label='dropdown of individuals'
            value={selectedPerson}         
          />
        </Dropdown.DropdownMenuTrigger>

        <Dropdown.Portal>
          <Dropdown.Content className='bg-slate-100 w-80 p-3 flex-col space-y-3 sm:w-50'>
            
              {people.map((person) => {
                return(
                  <Dropdown.Item key={person.id} 
                                 className='flex gap-6 hover:bg-slate-300 rounded-md p-2'
                                 onClick={() => test(person.name)}>
                    <img src={person.img}
                        className='w-100 h-100 max-w-sm max-h-7 rounded-3xl'/>
                    <h1>{person.name}</h1>   
                  </Dropdown.Item>
                )   
              })}
            
          </Dropdown.Content>
        </Dropdown.Portal>

      </Dropdown.Root>

      <section className="flex space-x-5">
        <RiMessengerLine size={25} />
        <IoMdNotificationsOutline size={25} />
        <BiSolidUserCircle size={25} />
      </section>
    </div>
  );
}

export default Nav;
