import React from 'react'
import { BsPencilSquare, BsStars } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiCarousel, BiMailSend } from "react-icons/bi";
import { LuFile } from "react-icons/lu";
import { IoBookOutline, IoTrendingUp } from 'react-icons/io5';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { LinearProgress } from '@mui/material';
import { GiSettingsKnobs } from 'react-icons/gi';
import { HiOutlineBolt } from 'react-icons/hi2';

const Sidebar = () => {
    return (
        <div className="w-72 border-r h-full p-4 space-y-4 flex flex-col justify-between">
            <nav className="space-y-4 mt-8">
                <button className="w-full flex items-center justify-center my-6 !text-lg text-white rounded-4xl px-2 py-3 bg-blue-500 hover:bg-blue-400" variant="default">
                    <span className='mr-3'><BsPencilSquare /></span>
                    Write Post
                </button>
                <button className="sidebar_opt">
                    <span className='icons'><BsStars /></span>
                    <span>Post Generator</span>
                </button>
                <button className="sidebar_opt">
                    <span className='icons'><HiOutlineLightBulb /></span>
                    <span>Ideas Generator</span>
                </button>
                <button className="sidebar_opt">
                    <span className='icons'><BiCarousel /></span>
                    <span>Carousel Maker</span>
                </button>
                <button className="sidebar_opt">
                    <span className='icons'><LuFile /></span>
                    <span>Posts</span>
                </button>
                <button className="sidebar_opt">
                    <span className='icons'><IoTrendingUp /></span>
                    <span>Content Inspiration</span>
                </button>
                <button className="sidebar_opt">
                    <span className='icons'><IoBookOutline /></span>
                    <span>Posts for you</span>
                </button>
                <button className="sidebar_opt">
                    <span className='icons'><RiCalendarScheduleLine /></span>
                    <span>Schedule</span>
                </button>
            </nav>
            <div className='space-y-4'>
                <button className="sidebar_opt">
                    <span className='icons'><GiSettingsKnobs /></span>
                    <span>Prefernces</span>
                </button>
                <button className="sidebar_opt">
                    <span className='icons'><BiMailSend /></span>
                    <span>Feature Request</span>
                </button>
                <div className='border rounded-xl space-y-2 bg-zinc-200 p-4'>
                    <div className='flex justify-between items-center text-base'>
                        <span>Words Generated</span>
                        <span>1.2k/50k</span>
                    </div>
                    <LinearProgress variant="determinate" value={80} />
                    <span className='!text-sm text-gray-500'>Monthly usage resets in 20 days</span>
                    <button className='w-full border !p-1 mt-2 rounded-xl flex justify-center items-center'>
                        <span><HiOutlineBolt /></span>
                        <span>Upgrade Plan</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar