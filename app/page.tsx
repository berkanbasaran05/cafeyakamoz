import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/header'
import HomeHero from '@/components/Home/HomeHero'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    
       <div className="flex flex-col w-full  items-center justify-between min-h-screen bg-gray-100">
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Header/>
       <HomeHero/>
       <Footer/>

     
        

      
    </div>
    
  )
}
