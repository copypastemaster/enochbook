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
        <div className='flex justify-between space-y-3 gap-5 xl:gap-0'>
            <Sidebar />
            <div className='bg-slate-500 rounded-md p-2 mx-auto flex-col space-y-5 xl:w-4/6'>
                <Header group={group} profile={profile}/>
                <NextPart profile={profile} intro={intro}/>
            </div>
           
        </div>
        
        </>

    )
}

function Header ({group, profile, firstButton, secondButton}) {
    if (profile.id === 0) {
        firstButton = 'Add to story'
        secondButton = 'Edit profile'
    } else {
        firstButton = 'Friends'
        secondButton  = 'Message'
    }

    return(
        <section className='bg-blue-100 rounded-md'
                             id='header'>
                <img src={profile.background} 
                     className='h-50 xl:h-5/6 xl:max-h-96 xl:w-5/6 xl:mx-auto xl:max-w-3xl xl:p-3 xl:rounded-3xl' alt="profile background"/>
                    <div className='w-1/2 mx-auto flex-col space-y-3 xl:flex xl:w-2/4 xl:mx-auto xl:relative xl:bottom-8 xl:space-x-3 xl:justify-between'>
                        <div className='text-center relative bottom-6 xl:flex xl:space-x-2 xl:text-left'>
                            <Avatar name='profile user' 
                            src={profile.img} 
                            size={{base: '2xl', md: 'xl', xl: '2xl'}}                            
                            />  
                            <section className='flex-col space-y-3 xl:align-middle xl:relative xl:top-10 xl:space-y-0'>
                                <h1 className='text-xl font-medium'>{profile.name}</h1>  
                                <h1 className='text-sm'>4 friends</h1>
                                <AvatarGroup className="flex relative left-9 xl:gap-0 xl:left-0">
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

                        <div className='self-end flex gap-1 xl:relative xl:bottom-24 xl:p-3'>
                            <Button colorScheme='blue' size='md'>{firstButton}</Button>
                            <Button colorScheme='blue' size='md'>{secondButton}</Button>
                        </div>                                      
                    </div>                                        
        </section>            
    )
}

function NextPart({profile, intro}) {
    return(
        <div className='rounded-md p-2 w-100 mx-auto gap-3 space-y-3 xl:space-y-3 xl:flex xl:w-5/6 xl:gap-3'>
            <section className=' basis-1/2 flex-col space-y-4' id='left-part'>
                <div className='bg-slate-200 p-2 rounded-md space-y-3' id='intro'>
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

                <div className='bg-slate-200 p-2 rounded-md flex-col space-y-2 ' id='photos'>
                    <section className='flex justify-between'>
                        <h1 className='font-semibold text-lg'>Photos</h1>
                        <button>See all photos</button>
                    </section>
                    
                    <section className='flex flex-wrap gap-1'>
                        <Image fallbackSrc='https://via.placeholder.com/140'/>
                        <Image fallbackSrc='https://via.placeholder.com/140'/>
                        <Image fallbackSrc='https://via.placeholder.com/140'/>
                        <Image fallbackSrc='https://via.placeholder.com/140'/>
                        <Image fallbackSrc='https://via.placeholder.com/140'/>
                        <Image fallbackSrc='https://via.placeholder.com/140'/>                      

                    </section>
                </div>
                

            </section>

            <section className='basis-2/3 flex-col space-y-3 xl:relative xl:bottom-3' id='right-part'>
                <div className='bg-slate-200 p-3 rounded-md space-y-4 '>
                    <section className='flex gap-4'>
                       <Avatar src={profile.img} size='md'/>
                        <input type='text' 
                               placeholder="What's on your mind?"
                               className='p-2 rounded-2xl basis-5/6 outline-none focus:outline-blue-400
                                         '/>                       
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