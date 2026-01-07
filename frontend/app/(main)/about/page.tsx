import React from 'react'

type Props = {}

/*------------------------------------
show data about this project and by whome this was created with what motive
--------------------------------------*/

export default function page({ }: Props) {
  return (
    <section>

        some image --

      <div className=' minidiv space-y-5'>
        <p className=' font-sansita font-semibold text-4xl text-ONE text-center'>Our Team</p>
        <p className=' text-center text-lg'>
          We have an entire team of geniuses behind us at SukraBites who are experts in a little bit of everything – from customer service, to social media, to videography, to assisting with recipe shoots. They are EVERYTHING.
        </p>
           <p className=' text-center text-lg'>
          Our team helps keep it all running smoothly.
        </p>
      </div>
    </section>
  )
}