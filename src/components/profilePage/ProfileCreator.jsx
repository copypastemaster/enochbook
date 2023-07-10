import React from "react";
import Sidebar from "../Sidebar";
import Posts from "../Posts";

import { people } from "../stories";
import { Avatar, AvatarBadge, AvatarGroup} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

import {IoMdSchool} from 'react-icons/io'
import {IoMdWifi} from 'react-icons/io'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {GrGallery} from 'react-icons/gr'

// let profile = people.find((person) => person.id == 0)
// let group = []
// people.forEach((person) => {
//     return person.id == 0 ? null : group.push(person.img)
// })


function ProfileCreator({group, profile, intro}) {
     
    return (
        <>
        <div className='flex justify-between space-y-3 '>
            <Sidebar />
            <div className='bg-slate-500 rounded-md p-2 w-4/6 mx-auto flex-col space-y-5'>
                <Header group={group} profile={profile}/>
                <NextPart profile={profile} intro={intro}/>
            </div>
           
        </div>
        
        </>

    )
}

function Header ({group, profile}) {
    return(
        <section className='bg-blue-100 rounded-md' id='header'>
                <img src={profile.background} className='h-5/6 max-h-96 w-5/6 max-w-3xl p-3 mx-auto rounded-3xl' alt="profile background"/>
                    <div className='flex w-2/4 mx-auto relative bottom-8 space-x-3 justify-between'>
                        <div className='flex space-x-2'>
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
                                                        size='sm'
                                                />
                                            </>
                                        )
                                    })}
                                </AvatarGroup>
                            </section>
                        </div>

                        <div className='self-end flex gap-2'>
                            <Button colorScheme='blue' size='sm'>Add friend</Button>
                            <Button colorScheme='blue' size='sm'>Message</Button>
                        </div>                                      
                    </div>                                        
        </section>            
    )
}

function NextPart({profile, intro}) {
    return(
        <div className='rounded-md p-2 w-5/6 mx-auto flex gap-3'>
            <section className=' basis-1/2 flex-col space-y-3' id='left-part'>
                <div className='bg-blue-100 p-2 rounded-md space-y-4' id='intro'>
                    <h1 className='font-semibold text-lg'>Intro</h1>  
                    <p className='text-center'>{intro} </p>
                    <Button colorScheme='blue' style={{width: '100%'}}>Edit bio</Button>

                    <section className='flex space-x-3'>
                        <IoMdSchool size={25}/>
                        <p>Went to college</p>                       
                    </section>

                    <section className='flex space-x-3'>
                        <IoMdWifi size={25}/>
                        <p>Followed by 4 people</p>
                    </section>
                </div>

                <div className='bg-blue-100 p-2 rounded-md flex-col space-y-2' id='photos'>
                    <section className='flex justify-between'>
                        <h1 className='font-semibold text-lg'>Photos</h1>
                        <button>See all photos</button>
                    </section>
                    
                    <section className='flex flex-wrap gap-4 '>
                        <Image fallbackSrc='https://via.placeholder.com/200'/>
                        <Image fallbackSrc='https://via.placeholder.com/200'/>
                        <Image fallbackSrc='https://via.placeholder.com/200'/>
                        <Image fallbackSrc='https://via.placeholder.com/200'/>
                        <Image fallbackSrc='https://via.placeholder.com/200'/>
                        <Image fallbackSrc='https://via.placeholder.com/200'/>                      

                    </section>
                </div>
                

            </section>

            <section className='basis-2/3 flex-col space-y-3' id='right-part'>
                <div className='bg-blue-100 p-3 rounded-md space-y-4 '>
                    <section className='flex gap-4'>
                       <Avatar src={profile.img} size='md'/>
                        <input type='text' 
                               placeholder="What's on your mind?"
                               className='p-2 rounded-2xl basis-5/6 outline-none focus:outline-blue-400'/>                       
                    </section>
                    <hr style={{border: '1px solid gray'}}/>
                    
                    <section className='flex justify-evenly'>
                        <BsFillCameraVideoFill size={27}/>
                        <GrGallery size={27}/>
                    </section>
                </div>
                <Posts />

            </section>
        </div>
    )
}

export default ProfileCreator