import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/header'
import HomeHero from '@/components/Home/HomeHero'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
       
       <div className="flex flex-col w-full items-center p-10  min-h-screen h-full justify-between">
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full  md:object-cover object-cover z-0"
          >
            <source src="/assets/banner/bannervideo.mp4" type="video/mp4" />
          </video>
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
