import React from 'react'
import Image from 'next/image';
import {AiOutlineArrowDown} from 'react-icons/ai';

const Arrow = () => {
    return (
        <div className="flex justify-center md:justify-start lg:container md:mx-auto">
        <div className="relative">
        <Image src="/images/bg_color.svg" width={200} height={200} alt="Arrow Background"/>
        <AiOutlineArrowDown className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"/>
        </div>
      </div>
    )
}

export default Arrow
