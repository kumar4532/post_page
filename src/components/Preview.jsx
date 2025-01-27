import React, { useState } from 'react';
import { Avatar, Button } from '@mui/material';
import { BiGlobe, BiSend } from 'react-icons/bi';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { LuRepeat2 } from 'react-icons/lu';
import { IoIosPhonePortrait, IoIosTabletPortrait } from 'react-icons/io';
import { RiComputerLine } from 'react-icons/ri';
import useGetText from '../zustand/useGetText';
import DOMPurify from 'dompurify';
import { FcLike } from 'react-icons/fc';

const Preview = () => {
    const { content } = useGetText();
    const [device, setDevice] = useState('');

    const createSanitizedHTML = (htmlContent) => {
        const config = {
            ALLOWED_TAGS: ['p', 'u', 'b', 'i', 'em', 'strong', 'br', 'div', 'span'],
            ALLOWED_ATTR: ['class', 'style'],
        };

        return {
            __html: DOMPurify.sanitize(htmlContent, config),
        };
    };

    const handleDeviceChange = (deviceType) => {
        setDevice(deviceType);
    };

    return (
        <div className="w-[35%] h-full bg-gray-200">
            <div className="flex flex-row justify-between p-4 bg-white">
                <h1 className="text-lg">Post Preview</h1>
                <div className="flex flex-row items-center space-x-2">
                    <span>Devices</span>
                    <span
                        className={`preview_icon ${device === 'phone' && 'active'}`}
                        onClick={() => handleDeviceChange('phone')}
                    >
                        <IoIosPhonePortrait />
                    </span>
                    <span
                        className={`preview_icon ${device === 'tablet' && 'active'}`}
                        onClick={() => handleDeviceChange('tablet')}
                    >
                        <IoIosTabletPortrait />
                    </span>
                    <span
                        className={`preview_icon ${device === 'pc' && 'active'}`}
                        onClick={() => handleDeviceChange('pc')}
                    >
                        <RiComputerLine />
                    </span>
                </div>
            </div>

            {/* Post Card */}
            <div
                className={` bg-white rounded-lg shadow mx-auto mt-32 ${device === 'phone'
                    ? 'w-[70%]'
                    : device === 'tablet'
                        ? 'w-[80%]'
                        : 'w-[90%]'
                    }`}
            >
                <div className="p-4 space-y-4">
                    {/* Post Header */}
                    <div className="flex flex-row space-x-4">
                        <Avatar
                            alt="Cody"
                            src="/placeholder.jpeg"
                            sx={{ width: 60, height: 60 }}
                        />
                        <div className="flex flex-col justify-start ">
                            <h2 className="font-semibold">Cody Fisher</h2>
                            <span className="text-sm text-muted-foreground break-words">
                                UI/UX Design | Web & Mobile Design | Front-end | UI Developer
                            </span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <span>Now</span>
                                <BiGlobe className="h-3 w-3" />
                            </div>
                        </div>
                    </div>

                    <div dangerouslySetInnerHTML={createSanitizedHTML(content)} />

                    <div className="flex justify-between items-center gap-2 text-sm text-muted-foreground pt-2 px-2">
                        <div className='flex flex-row items-center text-base space-x-2'>
                            <FaRegThumbsUp className="text-blue-500 transform scale-x-[-1]" />
                            <FcLike className='-ml-3' />
                            <span>41</span>
                        </div>
                        <div className={`flex ${device === 'phone' ? 'gap-1' : 'gap-2'}`}>
                            <span>4 comments</span>
                            <span>•</span>
                            <span>1 repost</span>
                        </div>
                    </div>

                    <div
                        className={`flex justify-evenly items-center gap-1 border-t pt-1 ${device === 'phone'
                            ? 'text-sm'
                            : device === 'tablet'
                                ? 'text-base'
                                : 'text-lg gap-4'
                            }`}
                    >
                        <Button>
                            <FaRegThumbsUp className={`transform scale-x-[-1] mr-1 ${device === 'phone' ? 'hidden' : 'text-base'}`} />
                            Like
                        </Button>
                        <Button>
                            <FiMessageCircle className={`mr-1 ${device === 'phone' ? 'hidden' : 'text-base'}`} />
                            Comment
                        </Button>
                        <Button>
                            <LuRepeat2 className={`mr-1 ${device === 'phone' ? 'hidden' : 'text-base'}`} />
                            Share
                        </Button>
                        <Button>
                            <BiSend className={`mr-1 ${device === 'phone' ? 'hidden' : 'text-base'}`} />
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;