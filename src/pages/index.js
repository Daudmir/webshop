import { Inter } from 'next/font/google'
import Hero from '@/Components/Hero'
import Banner from '@/Components/Banner'
import Category from '@/Components/Category'
import Reviews from '@/Components/Reviews'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <Banner />
        <Navbar />
        <Hero />
        <Category />
        <Reviews />
        <Footer />
      </div>
  )
}
