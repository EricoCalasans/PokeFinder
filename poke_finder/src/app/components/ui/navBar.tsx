'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavBar() {
    const pathname = usePathname()

    return (
        <div className='bg-neutral-800 h-12'>
            <div className=" flex flex-nowrap w-100 space-x-4">
                <div className='flex flex-nowrap px-4 text-2xl'>
                    <div className='text-5xl text-red-500'>P</div>
                    <div className=' flex flex-nowrap pt-2'>
                        <div className='pt-2'>oke</div>
                        <div className='text-4xl text-red-500'>F</div>
                        <div className='pt-2 '>inder</div>
                    </div>
                </div>
                <div className='flex flex-nowrap space-x-4 items-center'>
                    <div>menu 2</div>
                    <div>menu 3</div>
                </div>
            </div>
        </div>
    )
}