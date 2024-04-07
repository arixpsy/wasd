import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home = () => {
  return (
    <div className='h-screen bg-l-bg p-10 text-l-text transition-colors dark:bg-d-bg dark:text-d-text'>
      <div className='m-auto grid h-full max-w-[1000px] grid-rows-[auto_1fr_auto]'>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default Home
