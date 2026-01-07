import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
     return (
          <section className=' border-t border-ONE/20  pt-5'>
               
               <div className=' flex   justify-end'>
                    social media links --
               </div>
               <div className=' space-x-4  w-full flex justify-between items-end'>
                    <span className=' text-ONE text-4xl font-semibold font-sansita '>
                         SukraBites
                    </span>
                    <span>
                         © 2026 Pinch of Yum. All Rights Reserved.
                    </span>

               </div>
          </section>
     )
}