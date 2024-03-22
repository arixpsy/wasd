import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home = () => {
  return (
    <div className='h-screen bg-white p-10 text-gray transition-colors dark:bg-gray dark:text-white'>
      <div className='m-auto grid h-full max-w-[1000px] grid-rows-[auto_1fr_auto]'>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default Home
