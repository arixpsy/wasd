import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className='dark:bg-gray text-gray h-screen bg-white p-10 transition-colors dark:text-white'>
      <div className='m-auto grid h-full max-w-[1000px] grid-rows-[auto_1fr_auto]'>
        <Header />
        <div>Body</div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
