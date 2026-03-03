import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/common/HeroSection'
import CategorySection from '../components/CategroySection'
import ContentItemSection from '../components/ContentItemSection'
import BannerTemplate from '../components/BannerTemplate'
import NewArrivalSection from '../components/NewArrivalSection'
import PictureBanner from '../components/PictureBanner'
import InfoCards from '../components/InfoCards'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'

const slides = [
  {
    image: image1,
    title: 'Biggest Deals of the Season',
    subtitle: 'Discover exclusive offers and top products from trusted vendors.',
    buttonText: 'Shop Now',
    buttonLink: '/shop',
  },
  {
    image: image2,
    title: 'Start Selling With Us',
    subtitle: 'Explore fresh & juicy fruits',
    buttonText: 'Shop Now',
    buttonLink: '/register-vendor',
  },
]

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection slides={slides} />
      <CategorySection />
      <ContentItemSection />
      <BannerTemplate />
      <NewArrivalSection />
      <PictureBanner />
      <InfoCards />
      <BlogSection />
      <Footer />
    </div>
  )
}
