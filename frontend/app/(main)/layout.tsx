import { ReactNode } from 'react'
import Footer from './_components/shared/Footer'
import Navbar from './_components/shared/Navbar'

type Props = {
  children: ReactNode
}

export default function layout({ children }: Props) {
  return (
    <div className='  '>
      <Navbar/>
      {children}
      <Footer />
    </div>
  )
}