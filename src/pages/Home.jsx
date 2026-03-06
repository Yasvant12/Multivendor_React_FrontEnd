import HeroSection from '../components/common/HeroSection'
import CategorySection from '../components/Homepage/CategroySection'
import ContentItemSection from '../components/Homepage/ContentItemSection'
import BannerTemplate from '../components/Homepage/BannerTemplate'
import NewArrivalSection from '../components/Homepage/NewArrivalSection'
import PictureBanner from '../components/Homepage/PictureBanner'
import InfoCards from '../components/Homepage/InfoCards'
import BlogSection from '../components/Homepage/BlogSection'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import GroceryShowcase from '../components/Homepage/Groceryshowcase'

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
      <HeroSection slides={slides} />
      <CategorySection />
      <ContentItemSection />
      <BannerTemplate />
      <NewArrivalSection />
      <PictureBanner />
      <InfoCards />
      <GroceryShowcase/>
      <BlogSection />
    </div>
  )
}
