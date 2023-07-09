import React from "react";
import Sidebar from "../Sidebar";
import { people } from "../stories";
import { Avatar, AvatarBadge, AvatarGroup} from '@chakra-ui/react'


function ProfileCreator(props) {
    
   
    let profile = people.find((person) => person.id == 0)
    let group = []
    people.forEach((person) => {
        return person.id == 0 ? null : group.push(person.img)
    })

    return (
        <>
        <div className='flex justify-between space-y-3 '>
            <Sidebar />
            <div className='bg-slate-500 rounded-md p-2 w-4/6 mx-auto'>
                <section className='bg-blue-100 rounded-md'>
                    <img src={profile.background} className='h-5/6 max-h-96 w-5/6 max-w-3xl p-3 mx-auto rounded-3xl' alt="profile background"/>
                        <div className='flex w-2/4 mx-auto relative bottom-8 space-x-3'>
                            <Avatar name='profile user' 
                            src={profile.img} 
                            size={{base: 'md', md: 'xl', xl: 'xl'}}                            
                            />  
                            <section className='flex-col align-middle relative top-4'>
                                <h1 className='text-xl font-medium'>{profile.name}</h1>  
                                <h1 className='text-sm'>4 friends</h1>
                                <AvatarGroup>
                                    {group.map((images) => {
                                        return (
                                            <>
                                                <Avatar src={images}
                                                        size='sm'/>
                                            </>
                                        )
                                    })}
                                </AvatarGroup>
                            </section>
                        </div>
                    
                    
                </section>
            </div>
        </div>
        
        </>

    )
}

export default ProfileCreator