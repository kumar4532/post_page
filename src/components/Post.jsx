import { Avatar } from '@mui/material'
import React from 'react'
import { LuSendHorizontal } from 'react-icons/lu';
import { PiSpeedometerLight } from 'react-icons/pi'
import { RiCalendarScheduleLine } from 'react-icons/ri';
import Tiptap from './Tiptap';

const Post = () => {
  return (
    <div className='h-full w-[55%] flex flex-col justify-between border-r'>
      {/* Navbar for main */}
      <div className='main_div p-2.5 border-b'>
        <h1 className='!text-2xl font-bold'>Write Post</h1>
        <div className='flex flex-row space-x-4'>
          <button className='btn'>
            <span className='text-lg'><PiSpeedometerLight /></span>
            <span>Check Score</span>
          </button>
          <div className='border-r'></div>
          <Avatar alt="Cody" src="/placeholder.jpeg" />
        </div>
      </div>

      <div className='w-[98%] mx-auto py-4 h-full'>
        <Tiptap />
      </div>

      {/* Footer for main */}
      <div className='main_div border-t pt-4 px-2 mb-6'>
        <button className='border p-2 rounded-2xl text-base hover:cursor-pointer'>Save as a draft</button>
        <div className='flex flex-row space-x-2'>
          <button className='btn'>
            <span><RiCalendarScheduleLine /></span>
            <span>Schedule</span>
          </button>
          <button className='btn bg-blue-500 hover:bg-blue-400 text-white'>
            <span>Publish</span>
            <span><LuSendHorizontal /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post