import React from 'react'
import { IoIosAlbums, IoMdArrowDropdown , IoMdArrowDropup , IoIosAddCircleOutline, IoMdLink , IoMdCloudUpload   } from "react-icons/io";
import { useState } from 'react'
export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const list=[
        {name: 'Create Module', icon:<IoIosAlbums />}, 
        {name: 'Add a Link', icon:<IoMdLink />},
        {name: 'Upload', icon:<IoMdCloudUpload />}
    ];
  return (
    <>
    <div className="relative flex flex--col items-center rounded-sm">
        <button 
        onClick={()=>setIsOpen((prev)=>!prev)} className='bg-blue-400 p-1 flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
           <IoIosAddCircleOutline/> Add
           {isOpen ? (
               <IoMdArrowDropup  className='h-8'/>
            ): (
               <IoMdArrowDropdown  className='h-8'/>
           )
           }
        </button>
        {isOpen && (
            <div className='bg-blue-400 absolute top-14 right-0 flex flex-col items-start rounded-lg p-2 w-[280px]'>

                {list.map((item,i)=>(
                    <div className='flex w-full items-center gap-2 p-4 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4'>
                    <h3>{item.icon}</h3>
                    <h3 className='font-bold'>{item.name}</h3>
                </div>
                ))}

            </div>
        )}
    </div>
    </>
  )
}
