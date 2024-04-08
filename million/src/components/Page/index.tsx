import { PropsWithChildren } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className='h-screen bg-l-bg p-10 text-l-text transition-colors dark:bg-d-bg dark:text-d-text'>
      <div className='m-auto grid h-full max-w-[1000px] grid-rows-[auto_1fr_auto]'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Page
