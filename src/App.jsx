
import { DatePicker } from 'antd';
import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/common/HeroSection';
import ContentItemSection from './components/ContentItemSection';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import BannerTemplate from './components/BannerTemplate';
import NewArrivalSection from './components/NewArrivalSection';
import PictureBanner from './components/PictureBanner';
import InfoCards from './components/InfoCards';
import BlogSection from './components/BlogSection';
import Footer from "./components/Footer"
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
];

function App() {

  return (
     <div className=''>
      {/* <h1 class="text-gray-400">Hii there</h1> */}
      {/* <DatePicker />; */}
      <Header/>
      <HeroSection slides={slides} />
      <ContentItemSection/>
      <BannerTemplate/>
      <NewArrivalSection/>
      <PictureBanner/>
      <InfoCards/>
      <BlogSection/>
      <Footer/>
     </div>
  )
}

export default App
